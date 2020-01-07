---
title: Redis主从复制
sidebarDepth: 3
---

## 本页目录
[[toc]]
::: tip
#### 非 root 用户 请添加 sudo
:::

## 主从复制
> 复制是高可用Redis的基础，哨兵和集群都是在复制的基础上实现高可用的。复制主要实现了数据的多备份，对于读写操作的负载均衡和简单的故障恢复。缺陷是故障恢复无法自动化，写操作无法负载均衡，存储能力受单机限制。
#### 读写分离
> 在 redis 主从架构中，Master 节点负责处理写请求，Slave 节点只处理读请求。对于写请求少，读请求多的场景(例如电商详情页)，通过这种读写分离的操作可以大幅提高并发量，通过增加 redis 从节点的数量可以使得 redis 的QPS 达到 10W+。
#### 主从同步
> Master 节点接收到写请求并处理后，告知 Slave 节点数据发生了改变，保持主从节点数据一致的行为称为主从同步，所有的 Slave 都和 Master 通信去同步数据也会加大 Master 节点的负担，实际上，除了主从同步，redis 也可以从从同步。

## 主从同步的方法
#### 增量同步
> redis 同步的是指令流，主节点会将那些对自己的状态产生修改性影响的指令记录在本地的内存 buffer 中，然后异步将 buffer 中的指令同步到从节点，从节点一边执行同步的指令流来达到和主节点一样的状态，一边向主节点反馈自己同步的偏移量。从节点同步数据的时候不会影响主节点的正常工作，也不会影响自己对外提供读服务的功能，从节点会用旧的数据来提供服务，当同步完成后，删除旧数据集，加载新数据，这个时候会暂停对外服务。

> 因为内存 buffer 的大小是有限的，所以 redis 主节点不能将所有的指令都记录在内存 buffer 中。redis 的复制内存 buffer 是一个定长的环形数组，如果数组内容满了，就会从头开始覆盖前面的内容。

#### 快照同步
> 如果节点间网络通信不好，那么当从节点同步的速度不如主节点接收新写请求的速度时，buffer 中会丢失一部分指令，从节点中的数据将与主节点中的数据不一致，此时将会触发快照同步。

> 快照同步是一个非常耗费资源的操作，它首先需要在主节点上进行一次 bgsave 将当前内存的数据全部快照到 RDB 文件中，然后再将快照文件的内容全部传送到从节点。从节点将 RDB 文件接受完毕后，立即执行一次全量加载，加载之前先要将当前内存的数据清空。加载完毕后通知主节点继续进行增量同步。

> 在整个快照同步进行的过程中，主节点的复制 buffer 还在不停的往前移动，如果快照同步的时间过长或者复制 buffer 太小，都会导致同步期间的增量指令在复制 buffer 中被覆盖，这样就会导致快照同步完成后无法进行增量复制，然后会再次发起快照同步，如此极有可能会陷入快照同步的死循环。所以需要配置一个合适的复制 buffer 大小参数，避免快照复制的死循环。

#### 无盘复制
> 主节点在进行快照同步时，会进行大量的文件 IO 操作，特别是对于非 SSD 磁盘存储时，快照会对系统的负载产生较大影响。当系统正在进行 AOF 的 fsync 操作时如果发生快照复制，fsync 将会被推迟执行，这就会严重影响主节点的服务效率。

> 无盘复制是主节点会一边遍历内存，一边将序列化的内容发送到从节点，而不是生成完整的 RDB 文件后才进行 IO 传输。从节点先将接收到的内容存储到磁盘文件中，再进行一次性加载。



## Docker安装 redis
### 创建容器
```sh
[root@localhost redis-5.0.7]# docker pull redis
Using default tag: latest
latest: Pulling from library/redis
8ec398bc0356: Pull complete
da01136793fa: Pull complete
cf1486a2c0b8: Pull complete
188200a8c82e: Pull complete
9391ca24f5d0: Pull complete
6ed21f46fa2d: Pull complete
Digest: sha256:21b037b4f6964887bb12fd8d72d06c7ab1f231a58781b6ca2ceee0febfeb0d36
Status: Downloaded newer image for redis:latest
docker.io/library/redis:latest
[root@localhost redis-5.0.7]#


[root@localhost redis-5.0.7]# docker container run --name master -d redis
3582dc6990ba2467a02438b8be0fc5356449a35eeb23ce7ee27788aef1294292
[root@localhost redis-5.0.7]# docker container run --name slave -d redis
1e459f9cf6ff1b489adaa7851b11a55ba24d2c9ee4578a22d5f06326b91856e9
[root@localhost redis-5.0.7]# docker container ls -a
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
1e459f9cf6ff        redis               "docker-entrypoint.s…"   6 seconds ago       Up 6 seconds        6379/tcp            slave
3582dc6990ba        redis               "docker-entrypoint.s…"   20 seconds ago      Up 19 seconds       6379/tcp            master
[root@localhost redis-5.0.7]#
```

### 设置主从
- 主 `172.17.0.2`
- 从 `172.17.0.3`
```sh
[root@localhost redis-5.0.7]# docker container exec -it slave redis-cli
127.0.0.1:6379> info replication
# Replication
role:master
connected_slaves:0
master_replid:5b4a945906461110dfc5e590fce612aca46e0ac2
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:0
second_repl_offset:-1
repl_backlog_active:0
repl_backlog_size:1048576
repl_backlog_first_byte_offset:0
repl_backlog_histlen:0
127.0.0.1:6379> SLAVEOF 172.17.0.2 6379
OK
127.0.0.1:6379> info replication
# Replication
role:slave
master_host:172.17.0.2
master_port:6379
master_link_status:up
master_last_io_seconds_ago:1
master_sync_in_progress:0
slave_repl_offset:0
slave_priority:100
slave_read_only:1
connected_slaves:0
master_replid:b9778c8f67294aa34a9793fcef3c91e4d01fb9c3
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:0
second_repl_offset:-1
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:1
repl_backlog_histlen:0
127.0.0.1:6379> quit
[root@localhost redis-5.0.7]#
```

### 读写测试
```sh
[root@localhost redis-5.0.7]# docker container exec -it master redis-cli
127.0.0.1:6379> keys *
(empty list or set)
127.0.0.1:6379> set hello ahri
OK
127.0.0.1:6379> keys *
1) "hello"
127.0.0.1:6379> get hello
"ahri"
127.0.0.1:6379> quit

[root@localhost redis-5.0.7]# docker container exec -it slave redis-cli
127.0.0.1:6379> keys *
1) "hello"
127.0.0.1:6379> get hello
"ahri"
127.0.0.1:6379>
```

## 手动安装 redis
### 安装编译工具
```sh
[root@localhost redis]# yum install -y gcc gcc-c++ automake autoconf libtool make
......
Installed:
  autoconf.noarch 0:2.69-11.el7           automake.noarch 0:1.13.4-3.el7           libtool.x86_64 0:2.4.2-22.el7_3           make.x86_64 1:3.82-24.el7

Dependency Installed:
  groff-base.x86_64 0:1.22.2-8.el7                    m4.x86_64 0:1.4.16-10.el7                           perl.x86_64 4:5.16.3-294.el7_6
  perl-Carp.noarch 0:1.26-244.el7                     perl-Data-Dumper.x86_64 0:2.145-3.el7               perl-Encode.x86_64 0:2.51-7.el7
  perl-Exporter.noarch 0:5.68-3.el7                   perl-File-Path.noarch 0:2.09-2.el7                  perl-File-Temp.noarch 0:0.23.01-3.el7
  perl-Filter.x86_64 0:1.49-3.el7                     perl-Getopt-Long.noarch 0:2.40-3.el7                perl-HTTP-Tiny.noarch 0:0.033-3.el7
  perl-PathTools.x86_64 0:3.40-5.el7                  perl-Pod-Escapes.noarch 1:1.04-294.el7_6            perl-Pod-Perldoc.noarch 0:3.20-4.el7
  perl-Pod-Simple.noarch 1:3.28-4.el7                 perl-Pod-Usage.noarch 0:1.63-3.el7                  perl-Scalar-List-Utils.x86_64 0:1.27-248.el7
  perl-Socket.x86_64 0:2.010-4.el7                    perl-Storable.x86_64 0:2.45-3.el7                   perl-Test-Harness.noarch 0:3.28-3.el7
  perl-Text-ParseWords.noarch 0:3.29-4.el7            perl-Thread-Queue.noarch 0:3.02-2.el7               perl-Time-HiRes.x86_64 4:1.9725-3.el7
  perl-Time-Local.noarch 0:1.2300-2.el7               perl-constant.noarch 0:1.27-2.el7                   perl-libs.x86_64 4:5.16.3-294.el7_6
  perl-macros.x86_64 4:5.16.3-294.el7_6               perl-parent.noarch 1:0.225-244.el7                  perl-podlators.noarch 0:2.5.1-3.el7
  perl-threads.x86_64 0:1.87-4.el7                    perl-threads-shared.x86_64 0:1.43-6.el7

Complete!
[root@localhost redis]# tar -zxvf redis-5.0.7.tar.gz
......
[root@localhost redis]# cd redis-5.0.7
[root@localhost redis-5.0.7]# ls
00-RELEASENOTES  CONTRIBUTING  INSTALL    Makefile   deps        runtest          runtest-moduleapi  sentinel.conf  tests
BUGS             COPYING       MANIFESTO  README.md  redis.conf  runtest-cluster  runtest-sentinel   src            utils
[root@localhost redis-5.0.7]# ls ./src/
Makefile     atomicvar.h  db.c          geohash.c         listpack_malloc.h  networking.c  rdb.c              scripting.c     solarisfixes.h  util.c
adlist.c     bio.c        debug.c       geohash.h         localtime.c        notify.c      rdb.h              sds.c           sort.c          util.h
adlist.h     bio.h        debugmacro.h  geohash_helper.c  lolwut.c           object.c      redis-benchmark.c  sds.h           sparkline.c     valgrind.sup
ae.c         bitops.c     defrag.c      geohash_helper.h  lolwut5.c          pqsort.c      redis-check-aof.c  sdsalloc.h      sparkline.h     version.h
ae.h         blocked.c    dict.c        help.h            lzf.h              pqsort.h      redis-check-rdb.c  sentinel.c      stream.h        ziplist.c
ae_epoll.c   childinfo.c  dict.h        hyperloglog.c     lzfP.h             pubsub.c      redis-cli.c        server.c        syncio.c        ziplist.h
ae_evport.c  cluster.c    endianconv.c  intset.c          lzf_c.c            quicklist.c   redis-trib.rb      server.h        t_hash.c        zipmap.c
ae_kqueue.c  cluster.h    endianconv.h  intset.h          lzf_d.c            quicklist.h   redisassert.h      setproctitle.c  t_list.c        zipmap.h
ae_select.c  config.c     evict.c       latency.c         memtest.c          rand.c        redismodule.h      sha1.c          t_set.c         zmalloc.c
anet.c       config.h     expire.c      latency.h         mkreleasehdr.sh    rand.h        release.c          sha1.h          t_stream.c      zmalloc.h
anet.h       crc16.c      fmacros.h     lazyfree.c        module.c           rax.c         replication.c      siphash.c       t_string.c
aof.c        crc64.c      geo.c         listpack.c        modules            rax.h         rio.c              slowlog.c       t_zset.c
asciilogo.h  crc64.h      geo.h         listpack.h        multi.c            rax_malloc.h  rio.h              slowlog.h       testhelp.h
[root@localhost redis-5.0.7]#
```

### 编译 redis
```sh
[root@localhost redis-5.0.7]# make
......
[root@localhost redis-5.0.7]# ls ./src/
Makefile     blocked.c     dict.h            intset.h           memtest.c        rand.h             redis-trib.rb   setproctitle.o  t_set.o
adlist.c     blocked.o     dict.o            intset.o           memtest.o        rand.o             redisassert.h   sha1.c          t_stream.c
adlist.h     childinfo.c   endianconv.c      latency.c          mkreleasehdr.sh  rax.c              redismodule.h   sha1.h          t_stream.o
adlist.o     childinfo.o   endianconv.h      latency.h          module.c         rax.h              release.c       sha1.o          t_string.c
ae.c         cluster.c     endianconv.o      latency.o          module.o         rax.o              release.h       siphash.c       t_string.o
ae.h         cluster.h     evict.c           lazyfree.c         modules          rax_malloc.h       release.o       siphash.o       t_zset.c
ae.o         cluster.o     evict.o           lazyfree.o         multi.c          rdb.c              replication.c   slowlog.c       t_zset.o
ae_epoll.c   config.c      expire.c          listpack.c         multi.o          rdb.h              replication.o   slowlog.h       testhelp.h
ae_evport.c  config.h      expire.o          listpack.h         networking.c     rdb.o              rio.c           slowlog.o       util.c
ae_kqueue.c  config.o      fmacros.h         listpack.o         networking.o     redis-benchmark    rio.h           solarisfixes.h  util.h
ae_select.c  crc16.c       geo.c             listpack_malloc.h  notify.c         redis-benchmark.c  rio.o           sort.c          util.o
anet.c       crc16.o       geo.h             localtime.c        notify.o         redis-benchmark.o  scripting.c     sort.o          valgrind.sup
anet.h       crc64.c       geo.o             localtime.o        object.c         redis-check-aof    scripting.o     sparkline.c     version.h
anet.o       crc64.h       geohash.c         lolwut.c           object.o         redis-check-aof.c  sds.c           sparkline.h     ziplist.c
aof.c        crc64.o       geohash.h         lolwut.o           pqsort.c         redis-check-aof.o  sds.h           sparkline.o     ziplist.h
aof.o        db.c          geohash.o         lolwut5.c          pqsort.h         redis-check-rdb    sds.o           stream.h        ziplist.o
asciilogo.h  db.o          geohash_helper.c  lolwut5.o          pqsort.o         redis-check-rdb.c  sdsalloc.h      syncio.c        zipmap.c
atomicvar.h  debug.c       geohash_helper.h  lzf.h              pubsub.c         redis-check-rdb.o  sentinel.c      syncio.o        zipmap.h
bio.c        debug.o       geohash_helper.o  lzfP.h             pubsub.o         redis-cli          sentinel.o      t_hash.c        zipmap.o
bio.h        debugmacro.h  help.h            lzf_c.c            quicklist.c      redis-cli.c        server.c        t_hash.o        zmalloc.c
bio.o        defrag.c      hyperloglog.c     lzf_c.o            quicklist.h      redis-cli.o        server.h        t_list.c        zmalloc.h
bitops.c     defrag.o      hyperloglog.o     lzf_d.c            quicklist.o      redis-sentinel     server.o        t_list.o        zmalloc.o
bitops.o     dict.c        intset.c          lzf_d.o            rand.c           redis-server       setproctitle.c  t_set.c
[root@localhost redis-5.0.7]#
```

### 配置主从
- 主 `10.10.10.100:7000`
- 从 `10.10.10.100:7001`
#### 更改主服务器配置
```sh
[root@localhost redis-5.0.7]# cp redis.conf redis-7000.conf
[root@localhost redis-5.0.7]# vim redis-7000.conf
```

```sh
# bind 127.0.0.1 # 注释掉
```
```sh
port 6379
# 改为
port 7000
```
```sh
protected-mode yes
# 改为
protected-mode no # 保护模式
```
```sh
daemonize no
# 改为
daemonize yes # 守护进程
```
#### 更改从服务器配置
```sh
[root@localhost redis-5.0.7]# cp redis.conf redis-7001.conf
[root@localhost redis-5.0.7]# vim redis-7001.conf
```

```sh
# bind 127.0.0.1 # 注释掉
```
```sh
port 6379
# 改为
port 7001
```
```sh
protected-mode yes
# 改为
protected-mode no # 保护模式
```
```sh
daemonize no
# 改为
daemonize yes # 守护进程
```
```sh
# replicaof <masterip> <masterport>
replicaof 10.10.10.10 7000 ## 添加主机地址
```

### 启动主从
```sh
[root@localhost redis-5.0.7]# ./src/redis-server ./redis-7000.conf
14635:C 30 Dec 2019 01:05:41.223 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
14635:C 30 Dec 2019 01:05:41.223 # Redis version=5.0.7, bits=64, commit=00000000, modified=0, pid=14635, just started
14635:C 30 Dec 2019 01:05:41.223 # Configuration loaded
[root@localhost redis-5.0.7]#


[root@localhost redis-5.0.7]# ./src/redis-server ./redis-7001.conf
14635:C 30 Dec 2019 01:05:41.223 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
14635:C 30 Dec 2019 01:05:41.223 # Redis version=5.0.7, bits=64, commit=00000000, modified=0, pid=14635, just started
14635:C 30 Dec 2019 01:05:41.223 # Configuration loaded
[root@localhost redis-5.0.7]#


[root@localhost redis-5.0.7]# netstat -ntlp
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 0.0.0.0:7000            0.0.0.0:*               LISTEN      14631/./src/redis-s
tcp        0      0 0.0.0.0:7001            0.0.0.0:*               LISTEN      14636/./src/redis-s
tcp        0      0 127.0.0.1:25            0.0.0.0:*               LISTEN      1267/master
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      1112/sshd
tcp6       0      0 :::7000                 :::*                    LISTEN      14631/./src/redis-s
tcp6       0      0 :::7001                 :::*                    LISTEN      14636/./src/redis-s
tcp6       0      0 ::1:25                  :::*                    LISTEN      1267/master
tcp6       0      0 :::22                   :::*                    LISTEN      1112/sshd
[root@localhost redis-5.0.7]#


[root@localhost redis-5.0.7]# ./src/redis-cli -p 7000
127.0.0.1:7000> info Replication
# Replication
role:master
connected_slaves:1
slave0:ip=10.10.10.100,port=7001,state=online,offset=308,lag=0
master_replid:4730f002b74c2e1abe59feb295eff916066c98b0
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:308
second_repl_offset:-1
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:1
repl_backlog_histlen:308
127.0.0.1:7000>


[root@localhost redis-5.0.7]# ./src/redis-cli -p 7001
127.0.0.1:7001> info Replication
# Replication
role:slave
master_host:10.10.10.100
master_port:7000
master_link_status:up
master_last_io_seconds_ago:3
master_sync_in_progress:0
slave_repl_offset:322
slave_priority:100
slave_read_only:1
connected_slaves:0
master_replid:4730f002b74c2e1abe59feb295eff916066c98b0
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:322
second_repl_offset:-1
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:1
repl_backlog_histlen:322
127.0.0.1:7001>
```

### 读写测试
- 主
```sh
127.0.0.1:7000> keys *
(empty list or set)
127.0.0.1:7000> set hello ahri
OK
127.0.0.1:7000> keys *
1) "hello"
127.0.0.1:7000> get hello
"ahri"
127.0.0.1:7000>
```
- 从
```sh
127.0.0.1:7001> keys *
1) "hello"
127.0.0.1:7001> get hello
"ahri"
127.0.0.1:7001>
```



<Valine />