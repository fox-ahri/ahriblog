---
title: Redis哨兵
sidebarDepth: 3
---

## 本页目录
[[toc]]
::: tip
#### 非 root 用户 请添加 sudo
:::

## Redis 哨兵机制
### 哨兵的作用
- 集群监控：负责监控 `redis master` 和 `slave` 进程是否正常工作
- 消息通知：某个 `redis` 实例出现故障时，发送警报消息给管理员
- 故障转移：如果 `master node` 挂掉，会自动转移到 `slave node` 上
- 配置中心：如果故障转移发生了，通知 `client` 客户端新的 `master` 地址

### 哨兵的核心
- 故障转移时，判断一个 `master node` 是否宕机了，需要大部分的哨兵同意 -- 分布式选举问题
- 哨兵至少需要三个实例来保证健壮性
- 哨兵 + 主从 是不会保证数据零丢失的，只能保证 `redis` 集群的高可用性
    > master -> slave 的复制时异步的，所以有可能部分数据还没到 slave，master 就宕机了

### sdown 和 odown
- sdown 和 odown 是两种失败状态
- sdown 是主观宕机，一个哨兵自己觉得一个 master 宕机了
- odown 是客观宕机，`quorum` 数量的哨兵都觉得一个 master 宕机了
- sdown 达成条件，一个哨兵 ping 一个 `master`，超过 `is-master-down-after-milliseconds` 指定的毫秒数
- odown 达成条件，一个哨兵在指定时间内，收到了 `quorum` 指定数量其他哨兵也认为哪个 `master` 宕机

## 多哨兵搭建(一主两从三哨兵)
- 主 `10.10.5.107:7000`
- 从 `10.10.5.107:7001`, `10.10.5.107:7002`
- 哨兵 `10.10.5.107:7000`, `10.10.5.107:7001`, `10.10.5.107:7002`
### 更改配置文件
```sh
[root@localhost redis-5.0.7]# cp redis.conf redis-7000.conf
[root@localhost redis-5.0.7]# cp redis.conf redis-7001.conf
[root@localhost redis-5.0.7]# cp redis.conf redis-7002.conf
[root@localhost redis-5.0.7]# vim redis-7000.conf
```

```sh
# bind 127.0.0.1 # 注释掉

protected-mode yes
# 改为
protected-mode no # 保护模式

daemonize no
# 改为
daemonize yes # 守护进程
```
#### 分别更改端口
```sh
port 7000 # 7001 7002
```
#### 配置从服务器
```sh
# replicaof <masterip> <masterport>
replicaof 10.10.7.105 7000 # 7001 和 7002 添加
```
### 更改 哨兵 配置文件
```sh
[root@localhost redis-5.0.7]# vim sentinel.conf
port 26379
# 分别改为
port 27000
port 27001
port 27002

logfile ""
# 分别改为
logfile "/root/redis/redis-5.0.7/27000.log"
logfile "/root/redis/redis-5.0.7/27001.log"
logfile "/root/redis/redis-5.0.7/27002.log"

sentinel monitor mymaster 127.0.0.1 6379 2
# 改为
sentinel monitor mymaster 10.10.7.105 7000 2 # 监控 master 2：多数派数量
```

### 启动服务
```sh
[root@localhost redis-5.0.7]# ./src/redis-server ./redis-7000.conf
1709:C 30 Dec 2019 22:43:58.753 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1709:C 30 Dec 2019 22:43:58.753 # Redis version=5.0.7, bits=64, commit=00000000, modified=0, pid=1709, just started
1709:C 30 Dec 2019 22:43:58.753 # Configuration loaded
[root@localhost redis-5.0.7]# ./src/redis-server ./redis-7001.conf
1729:C 30 Dec 2019 22:52:43.401 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1729:C 30 Dec 2019 22:52:43.401 # Redis version=5.0.7, bits=64, commit=00000000, modified=0, pid=1729, just started
1729:C 30 Dec 2019 22:52:43.401 # Configuration loaded
[root@localhost redis-5.0.7]# ./src/redis-server ./redis-7002.conf
1735:C 30 Dec 2019 22:52:47.824 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1735:C 30 Dec 2019 22:52:47.824 # Redis version=5.0.7, bits=64, commit=00000000, modified=0, pid=1735, just started
1735:C 30 Dec 2019 22:52:47.824 # Configuration loaded
[root@localhost redis-5.0.7]# netstat -ntlp
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 0.0.0.0:7000            0.0.0.0:*               LISTEN      1710/./src/redis-se
tcp        0      0 0.0.0.0:7001            0.0.0.0:*               LISTEN      1730/./src/redis-se
tcp        0      0 127.0.0.1:25            0.0.0.0:*               LISTEN      1271/master
tcp        0      0 0.0.0.0:7002            0.0.0.0:*               LISTEN      1736/./src/redis-se
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      1112/sshd
tcp6       0      0 :::7000                 :::*                    LISTEN      1710/./src/redis-se
tcp6       0      0 :::7001                 :::*                    LISTEN      1730/./src/redis-se
tcp6       0      0 ::1:25                  :::*                    LISTEN      1271/master
tcp6       0      0 :::7002                 :::*                    LISTEN      1736/./src/redis-se
tcp6       0      0 :::22                   :::*                    LISTEN      1112/sshd
[root@localhost redis-5.0.7]#
```

#### 主服务器
```sh
[root@localhost redis-5.0.7]# ./src/redis-cli -p 7000
127.0.0.1:7000> keys *
(empty list or set)
127.0.0.1:7000> info Replication
# Replication
role:master
connected_slaves:2
slave0:ip=10.10.7.105,port=7001,state=online,offset=308,lag=0
slave1:ip=10.10.7.105,port=7002,state=online,offset=308,lag=0
master_replid:0244075394d298b7031491551f19736034afb85e
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:308
second_repl_offset:-1
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:1
repl_backlog_histlen:308
127.0.0.1:7000>
```

#### 从服务器 1
```sh
[root@localhost redis-5.0.7]# ./src/redis-cli -p 7001
127.0.0.1:7001> keys *
(empty list or set)
127.0.0.1:7001> info Replication
# Replication
role:slave
master_host:10.10.7.105
master_port:7000
master_link_status:up
master_last_io_seconds_ago:6
master_sync_in_progress:0
slave_repl_offset:294
slave_priority:100
slave_read_only:1
connected_slaves:0
master_replid:0244075394d298b7031491551f19736034afb85e
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:294
second_repl_offset:-1
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:1
repl_backlog_histlen:294
127.0.0.1:7001>
```

#### 从服务器 2
```sh
[root@localhost redis-5.0.7]# ./src/redis-cli -p 7002
127.0.0.1:7002> keys *
(empty list or set)
127.0.0.1:7002> info Replication
# Replication
role:slave
master_host:10.10.7.105
master_port:7000
master_link_status:up
master_last_io_seconds_ago:3
master_sync_in_progress:0
slave_repl_offset:294
slave_priority:100
slave_read_only:1
connected_slaves:0
master_replid:0244075394d298b7031491551f19736034afb85e
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:294
second_repl_offset:-1
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:1
repl_backlog_histlen:294
127.0.0.1:7002>
```

### 启动哨兵
```sh
[root@localhost redis-5.0.7]# ./src/redis-server ./sentinel-27000.conf --sentinel
--

[root@localhost redis-5.0.7]# ./src/redis-server ./sentinel-27001.conf --sentinel
--

[root@localhost redis-5.0.7]# ./src/redis-server ./sentinel-27002.conf --sentinel
--

```
```sh
[root@localhost ~]# netstat -ntlp
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 0.0.0.0:27000           0.0.0.0:*               LISTEN      1814/./src/redis-se
tcp        0      0 0.0.0.0:7000            0.0.0.0:*               LISTEN      1710/./src/redis-se
tcp        0      0 0.0.0.0:27001           0.0.0.0:*               LISTEN      1819/./src/redis-se
tcp        0      0 0.0.0.0:7001            0.0.0.0:*               LISTEN      1730/./src/redis-se
tcp        0      0 127.0.0.1:25            0.0.0.0:*               LISTEN      1271/master
tcp        0      0 0.0.0.0:27002           0.0.0.0:*               LISTEN      1839/./src/redis-se
tcp        0      0 0.0.0.0:7002            0.0.0.0:*               LISTEN      1736/./src/redis-se
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      1112/sshd
tcp6       0      0 :::27000                :::*                    LISTEN      1814/./src/redis-se
tcp6       0      0 :::7000                 :::*                    LISTEN      1710/./src/redis-se
tcp6       0      0 :::27001                :::*                    LISTEN      1819/./src/redis-se
tcp6       0      0 :::7001                 :::*                    LISTEN      1730/./src/redis-se
tcp6       0      0 ::1:25                  :::*                    LISTEN      1271/master
tcp6       0      0 :::27002                :::*                    LISTEN      1839/./src/redis-se
tcp6       0      0 :::7002                 :::*                    LISTEN      1736/./src/redis-se
tcp6       0      0 :::22                   :::*                    LISTEN      1112/sshd
[root@localhost ~]#
```


### 读写测试
```py
from redis.sentinel import Sentinel
sentinel = Sentinel([('10.10.7.105', 27000), ('10.10.7.105', 27001), ('10.10.7.105', 27002)], socket_timeout=0.1)

print(sentinel.discover_master('mymaster'))
# ('10.10.7.105', 7000)

print(sentinel.discover_slaves('mymaster'))
# [('10.10.7.105', 7002), ('10.10.7.105', 7001)]

master = sentinel.master_for('mymaster', socket_timeout=0.1)
print(master.set('hello', 'ahri'))
# True

slave = sentinel.slave_for('mymaster', socket_timeout=0.1)
print(slave.get('hello'))
# b'ahri'
print(slave.get('hello').decode('utf8'))
# ahri
```

```sh
[root@localhost redis-5.0.7]# ./src/redis-cli -p 7000
127.0.0.1:7000> keys *
1) "hello"
127.0.0.1:7000> get hello
"ahri"
127.0.0.1:7000> exit
[root@localhost redis-5.0.7]# ./src/redis-cli -p 7001
127.0.0.1:7001> keys *
1) "hello"
127.0.0.1:7001> get hello
"ahri"
127.0.0.1:7001> exit
[root@localhost redis-5.0.7]# ./src/redis-cli -p 7002
127.0.0.1:7002> keys *
1) "hello"
127.0.0.1:7002> get hello
"ahri"
127.0.0.1:7002> exit
[root@localhost redis-5.0.7]#
```

## 高可用测试
### 关闭 master
```sh
[root@localhost redis-5.0.7]# kill -9 1710
[root@localhost redis-5.0.7]# cat 27000.log
1814:X 30 Dec 2019 22:59:36.127 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1814:X 30 Dec 2019 22:59:36.127 # Redis version=5.0.7, bits=64, commit=00000000, modified=0, pid=1814, just started
1814:X 30 Dec 2019 22:59:36.127 # Configuration loaded
1814:X 30 Dec 2019 22:59:36.128 * Increased maximum number of open files to 10032 (it was originally set to 1024).
1814:X 30 Dec 2019 22:59:36.129 * Running mode=sentinel, port=27000.
1814:X 30 Dec 2019 22:59:36.129 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
1814:X 30 Dec 2019 22:59:36.130 # Sentinel ID is 7a63a8db891d8d277abddac20d0a85c5852c3a33
1814:X 30 Dec 2019 22:59:36.130 # +monitor master mymaster 10.10.7.105 7000 quorum 2
1814:X 30 Dec 2019 22:59:36.131 * +slave slave 10.10.7.105:7001 10.10.7.105 7001 @ mymaster 10.10.7.105 7000
1814:X 30 Dec 2019 22:59:36.131 * +slave slave 10.10.7.105:7002 10.10.7.105 7002 @ mymaster 10.10.7.105 7000
1814:X 30 Dec 2019 23:00:53.183 * +sentinel sentinel a4db54b4a862c06987494943d793f2c6a47e0d05 10.10.7.105 27001 @ mymaster 10.10.7.105 7000
1814:X 30 Dec 2019 23:01:05.025 * +sentinel sentinel ec863fa8013b44c9f9b0df0794bcd06acd197702 10.10.7.105 27002 @ mymaster 10.10.7.105 7000
1814:X 30 Dec 2019 23:17:38.531 # +sdown sentinel a4db54b4a862c06987494943d793f2c6a47e0d05 10.10.7.105 27001 @ mymaster 10.10.7.105 7000
1814:X 30 Dec 2019 23:18:12.886 # -sdown sentinel a4db54b4a862c06987494943d793f2c6a47e0d05 10.10.7.105 27001 @ mymaster 10.10.7.105 7000
[root@localhost redis-5.0.7]# cat 27001.log
1819:X 30 Dec 2019 23:00:51.162 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1819:X 30 Dec 2019 23:00:51.162 # Redis version=5.0.7, bits=64, commit=00000000, modified=0, pid=1819, just started
1819:X 30 Dec 2019 23:00:51.162 # Configuration loaded
1819:X 30 Dec 2019 23:00:51.163 * Increased maximum number of open files to 10032 (it was originally set to 1024).
1819:X 30 Dec 2019 23:00:51.163 * Running mode=sentinel, port=27001.
1819:X 30 Dec 2019 23:00:51.163 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
1819:X 30 Dec 2019 23:00:51.164 # Sentinel ID is a4db54b4a862c06987494943d793f2c6a47e0d05
1819:X 30 Dec 2019 23:00:51.164 # +monitor master mymaster 10.10.7.105 7000 quorum 2
1819:X 30 Dec 2019 23:00:51.165 * +slave slave 10.10.7.105:7001 10.10.7.105 7001 @ mymaster 10.10.7.105 7000
1819:X 30 Dec 2019 23:00:51.166 * +slave slave 10.10.7.105:7002 10.10.7.105 7002 @ mymaster 10.10.7.105 7000
1819:X 30 Dec 2019 23:00:51.405 * +sentinel sentinel 7a63a8db891d8d277abddac20d0a85c5852c3a33 10.10.7.105 27000 @ mymaster 10.10.7.105 7000
1819:X 30 Dec 2019 23:01:05.023 * +sentinel sentinel ec863fa8013b44c9f9b0df0794bcd06acd197702 10.10.7.105 27002 @ mymaster 10.10.7.105 7000
1819:signal-handler (1577765828) Received SIGINT scheduling shutdown...
1819:X 30 Dec 2019 23:17:08.443 # User requested shutdown...
1819:X 30 Dec 2019 23:17:08.443 * Removing the pid file.
1819:X 30 Dec 2019 23:17:08.443 # Sentinel is now ready to exit, bye bye...
1884:X 30 Dec 2019 23:18:12.165 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1884:X 30 Dec 2019 23:18:12.166 # Redis version=5.0.7, bits=64, commit=00000000, modified=0, pid=1884, just started
1884:X 30 Dec 2019 23:18:12.166 # Configuration loaded
1884:X 30 Dec 2019 23:18:12.166 * Increased maximum number of open files to 10032 (it was originally set to 1024).
1884:X 30 Dec 2019 23:18:12.167 * Running mode=sentinel, port=27001.
1884:X 30 Dec 2019 23:18:12.167 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
1884:X 30 Dec 2019 23:18:12.167 # Sentinel ID is a4db54b4a862c06987494943d793f2c6a47e0d05
1884:X 30 Dec 2019 23:18:12.167 # +monitor master mymaster 10.10.7.105 7000 quorum 2
1884:X 30 Dec 2019 23:31:34.816 # +sdown master mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:34.875 # +odown master mymaster 10.10.7.105 7000 #quorum 3/2
1884:X 30 Dec 2019 23:31:34.875 # +new-epoch 1
1884:X 30 Dec 2019 23:31:34.875 # +try-failover master mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:34.878 # +vote-for-leader a4db54b4a862c06987494943d793f2c6a47e0d05 1
1884:X 30 Dec 2019 23:31:34.887 # ec863fa8013b44c9f9b0df0794bcd06acd197702 voted for a4db54b4a862c06987494943d793f2c6a47e0d05 1
1884:X 30 Dec 2019 23:31:34.888 # 7a63a8db891d8d277abddac20d0a85c5852c3a33 voted for a4db54b4a862c06987494943d793f2c6a47e0d05 1
1884:X 30 Dec 2019 23:31:34.931 # +elected-leader master mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:34.931 # +failover-state-select-slave master mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:34.998 # +selected-slave slave 10.10.7.105:7001 10.10.7.105 7001 @ mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:34.998 * +failover-state-send-slaveof-noone slave 10.10.7.105:7001 10.10.7.105 7001 @ mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:35.089 * +failover-state-wait-promotion slave 10.10.7.105:7001 10.10.7.105 7001 @ mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:35.804 # +promoted-slave slave 10.10.7.105:7001 10.10.7.105 7001 @ mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:35.804 # +failover-state-reconf-slaves master mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:35.884 * +slave-reconf-sent slave 10.10.7.105:7002 10.10.7.105 7002 @ mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:36.060 # -odown master mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:36.858 * +slave-reconf-inprog slave 10.10.7.105:7002 10.10.7.105 7002 @ mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:36.858 * +slave-reconf-done slave 10.10.7.105:7002 10.10.7.105 7002 @ mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:36.959 # +failover-end master mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:36.959 # +switch-master mymaster 10.10.7.105 7000 10.10.7.105 7001
1884:X 30 Dec 2019 23:31:36.959 * +slave slave 10.10.7.105:7002 10.10.7.105 7002 @ mymaster 10.10.7.105 7001
1884:X 30 Dec 2019 23:31:36.959 * +slave slave 10.10.7.105:7000 10.10.7.105 7000 @ mymaster 10.10.7.105 7001
[root@localhost redis-5.0.7]# cat 27002.log
1839:X 30 Dec 2019 23:01:03.016 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1839:X 30 Dec 2019 23:01:03.016 # Redis version=5.0.7, bits=64, commit=00000000, modified=0, pid=1839, just started
1839:X 30 Dec 2019 23:01:03.016 # Configuration loaded
1839:X 30 Dec 2019 23:01:03.016 * Increased maximum number of open files to 10032 (it was originally set to 1024).
1839:X 30 Dec 2019 23:01:03.017 * Running mode=sentinel, port=27002.
1839:X 30 Dec 2019 23:01:03.017 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
1839:X 30 Dec 2019 23:01:03.018 # Sentinel ID is ec863fa8013b44c9f9b0df0794bcd06acd197702
1839:X 30 Dec 2019 23:01:03.018 # +monitor master mymaster 10.10.7.105 7000 quorum 2
1839:X 30 Dec 2019 23:01:03.019 * +slave slave 10.10.7.105:7001 10.10.7.105 7001 @ mymaster 10.10.7.105 7000
1839:X 30 Dec 2019 23:01:03.020 * +slave slave 10.10.7.105:7002 10.10.7.105 7002 @ mymaster 10.10.7.105 7000
1839:X 30 Dec 2019 23:01:03.363 * +sentinel sentinel a4db54b4a862c06987494943d793f2c6a47e0d05 10.10.7.105 27001 @ mymaster 10.10.7.105 7000
1839:X 30 Dec 2019 23:01:03.620 * +sentinel sentinel 7a63a8db891d8d277abddac20d0a85c5852c3a33 10.10.7.105 27000 @ mymaster 10.10.7.105 7000
1839:X 30 Dec 2019 23:17:38.554 # +sdown sentinel a4db54b4a862c06987494943d793f2c6a47e0d05 10.10.7.105 27001 @ mymaster 10.10.7.105 7000
1839:X 30 Dec 2019 23:18:12.943 # -sdown sentinel a4db54b4a862c06987494943d793f2c6a47e0d05 10.10.7.105 27001 @ mymaster 10.10.7.105 7000
1839:X 30 Dec 2019 23:31:34.733 # +sdown master mymaster 10.10.7.105 7000
1839:X 30 Dec 2019 23:31:34.883 # +new-epoch 1
1839:X 30 Dec 2019 23:31:34.886 # +vote-for-leader a4db54b4a862c06987494943d793f2c6a47e0d05 1
1839:X 30 Dec 2019 23:31:35.817 # +odown master mymaster 10.10.7.105 7000 #quorum 3/2
1839:X 30 Dec 2019 23:31:35.818 # Next failover delay: I will not start a failover before Mon Dec 30 23:37:35 2019
1839:X 30 Dec 2019 23:31:35.890 # +config-update-from sentinel a4db54b4a862c06987494943d793f2c6a47e0d05 10.10.7.105 27001 @ mymaster 10.10.7.105 7000
1839:X 30 Dec 2019 23:31:35.890 # +switch-master mymaster 10.10.7.105 7000 10.10.7.105 7001
1839:X 30 Dec 2019 23:31:35.890 * +slave slave 10.10.7.105:7002 10.10.7.105 7002 @ mymaster 10.10.7.105 7001
1839:X 30 Dec 2019 23:31:35.890 * +slave slave 10.10.7.105:7000 10.10.7.105 7000 @ mymaster 10.10.7.105 7001
[root@localhost redis-5.0.7]#
```
```py
`from redis.sentinel import Sentinel
sentinel = Sentinel([('10.10.7.105', 27000), ('10.10.7.105', 27001), ('10.10.7.105', 27002)], socket_timeout=0.1)
print(sentinel.discover_master('mymaster'))
# ('10.10.7.105', 7001)
print(sentinel.discover_slaves('mymaster'))`
# [('10.10.7.105', 7002)]
```

### 重启 关掉的服务
```sh
[root@localhost redis-5.0.7]# ./src/redis-server ./redis-7000.conf
2214:C 31 Dec 2019 00:09:03.416 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
2214:C 31 Dec 2019 00:09:03.416 # Redis version=5.0.7, bits=64, commit=00000000, modified=0, pid=2214, just started
2214:C 31 Dec 2019 00:09:03.416 # Configuration loaded
[root@localhost redis-5.0.7]# cat 27000.log
1814:X 30 Dec 2019 22:59:36.127 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1814:X 30 Dec 2019 22:59:36.127 # Redis version=5.0.7, bits=64, commit=00000000, modified=0, pid=1814, just started
1814:X 30 Dec 2019 22:59:36.127 # Configuration loaded
1814:X 30 Dec 2019 22:59:36.128 * Increased maximum number of open files to 10032 (it was originally set to 1024).
1814:X 30 Dec 2019 22:59:36.129 * Running mode=sentinel, port=27000.
1814:X 30 Dec 2019 22:59:36.129 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
1814:X 30 Dec 2019 22:59:36.130 # Sentinel ID is 7a63a8db891d8d277abddac20d0a85c5852c3a33
1814:X 30 Dec 2019 22:59:36.130 # +monitor master mymaster 10.10.7.105 7000 quorum 2
1814:X 30 Dec 2019 22:59:36.131 * +slave slave 10.10.7.105:7001 10.10.7.105 7001 @ mymaster 10.10.7.105 7000
1814:X 30 Dec 2019 22:59:36.131 * +slave slave 10.10.7.105:7002 10.10.7.105 7002 @ mymaster 10.10.7.105 7000
1814:X 30 Dec 2019 23:00:53.183 * +sentinel sentinel a4db54b4a862c06987494943d793f2c6a47e0d05 10.10.7.105 27001 @ mymaster 10.10.7.105 7000
1814:X 30 Dec 2019 23:01:05.025 * +sentinel sentinel ec863fa8013b44c9f9b0df0794bcd06acd197702 10.10.7.105 27002 @ mymaster 10.10.7.105 7000
1814:X 30 Dec 2019 23:17:38.531 # +sdown sentinel a4db54b4a862c06987494943d793f2c6a47e0d05 10.10.7.105 27001 @ mymaster 10.10.7.105 7000
1814:X 30 Dec 2019 23:18:12.886 # -sdown sentinel a4db54b4a862c06987494943d793f2c6a47e0d05 10.10.7.105 27001 @ mymaster 10.10.7.105 7000
1814:X 30 Dec 2019 23:31:34.800 # +sdown master mymaster 10.10.7.105 7000
1814:X 30 Dec 2019 23:31:34.884 # +new-epoch 1
1814:X 30 Dec 2019 23:31:34.887 # +vote-for-leader a4db54b4a862c06987494943d793f2c6a47e0d05 1
1814:X 30 Dec 2019 23:31:34.887 # +odown master mymaster 10.10.7.105 7000 #quorum 2/2
1814:X 30 Dec 2019 23:31:34.887 # Next failover delay: I will not start a failover before Mon Dec 30 23:37:35 2019
1814:X 30 Dec 2019 23:31:35.893 # +config-update-from sentinel a4db54b4a862c06987494943d793f2c6a47e0d05 10.10.7.105 27001 @ mymaster 10.10.7.105 7000
1814:X 30 Dec 2019 23:31:35.893 # +switch-master mymaster 10.10.7.105 7000 10.10.7.105 7001
1814:X 30 Dec 2019 23:31:35.893 * +slave slave 10.10.7.105:7002 10.10.7.105 7002 @ mymaster 10.10.7.105 7001
1814:X 30 Dec 2019 23:31:35.893 * +slave slave 10.10.7.105:7000 10.10.7.105 7000 @ mymaster 10.10.7.105 7001
1814:X 30 Dec 2019 23:32:05.992 # +sdown slave 10.10.7.105:7000 10.10.7.105 7000 @ mymaster 10.10.7.105 7001
1814:X 31 Dec 2019 00:09:04.142 # -sdown slave 10.10.7.105:7000 10.10.7.105 7000 @ mymaster 10.10.7.105 7001
[root@localhost redis-5.0.7]# cat 27001.log
1819:X 30 Dec 2019 23:00:51.162 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1819:X 30 Dec 2019 23:00:51.162 # Redis version=5.0.7, bits=64, commit=00000000, modified=0, pid=1819, just started
1819:X 30 Dec 2019 23:00:51.162 # Configuration loaded
1819:X 30 Dec 2019 23:00:51.163 * Increased maximum number of open files to 10032 (it was originally set to 1024).
1819:X 30 Dec 2019 23:00:51.163 * Running mode=sentinel, port=27001.
1819:X 30 Dec 2019 23:00:51.163 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
1819:X 30 Dec 2019 23:00:51.164 # Sentinel ID is a4db54b4a862c06987494943d793f2c6a47e0d05
1819:X 30 Dec 2019 23:00:51.164 # +monitor master mymaster 10.10.7.105 7000 quorum 2
1819:X 30 Dec 2019 23:00:51.165 * +slave slave 10.10.7.105:7001 10.10.7.105 7001 @ mymaster 10.10.7.105 7000
1819:X 30 Dec 2019 23:00:51.166 * +slave slave 10.10.7.105:7002 10.10.7.105 7002 @ mymaster 10.10.7.105 7000
1819:X 30 Dec 2019 23:00:51.405 * +sentinel sentinel 7a63a8db891d8d277abddac20d0a85c5852c3a33 10.10.7.105 27000 @ mymaster 10.10.7.105 7000
1819:X 30 Dec 2019 23:01:05.023 * +sentinel sentinel ec863fa8013b44c9f9b0df0794bcd06acd197702 10.10.7.105 27002 @ mymaster 10.10.7.105 7000
1819:signal-handler (1577765828) Received SIGINT scheduling shutdown...
1819:X 30 Dec 2019 23:17:08.443 # User requested shutdown...
1819:X 30 Dec 2019 23:17:08.443 * Removing the pid file.
1819:X 30 Dec 2019 23:17:08.443 # Sentinel is now ready to exit, bye bye...
1884:X 30 Dec 2019 23:18:12.165 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1884:X 30 Dec 2019 23:18:12.166 # Redis version=5.0.7, bits=64, commit=00000000, modified=0, pid=1884, just started
1884:X 30 Dec 2019 23:18:12.166 # Configuration loaded
1884:X 30 Dec 2019 23:18:12.166 * Increased maximum number of open files to 10032 (it was originally set to 1024).
1884:X 30 Dec 2019 23:18:12.167 * Running mode=sentinel, port=27001.
1884:X 30 Dec 2019 23:18:12.167 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
1884:X 30 Dec 2019 23:18:12.167 # Sentinel ID is a4db54b4a862c06987494943d793f2c6a47e0d05
1884:X 30 Dec 2019 23:18:12.167 # +monitor master mymaster 10.10.7.105 7000 quorum 2
1884:X 30 Dec 2019 23:31:34.816 # +sdown master mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:34.875 # +odown master mymaster 10.10.7.105 7000 #quorum 3/2
1884:X 30 Dec 2019 23:31:34.875 # +new-epoch 1
1884:X 30 Dec 2019 23:31:34.875 # +try-failover master mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:34.878 # +vote-for-leader a4db54b4a862c06987494943d793f2c6a47e0d05 1
1884:X 30 Dec 2019 23:31:34.887 # ec863fa8013b44c9f9b0df0794bcd06acd197702 voted for a4db54b4a862c06987494943d793f2c6a47e0d05 1
1884:X 30 Dec 2019 23:31:34.888 # 7a63a8db891d8d277abddac20d0a85c5852c3a33 voted for a4db54b4a862c06987494943d793f2c6a47e0d05 1
1884:X 30 Dec 2019 23:31:34.931 # +elected-leader master mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:34.931 # +failover-state-select-slave master mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:34.998 # +selected-slave slave 10.10.7.105:7001 10.10.7.105 7001 @ mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:34.998 * +failover-state-send-slaveof-noone slave 10.10.7.105:7001 10.10.7.105 7001 @ mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:35.089 * +failover-state-wait-promotion slave 10.10.7.105:7001 10.10.7.105 7001 @ mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:35.804 # +promoted-slave slave 10.10.7.105:7001 10.10.7.105 7001 @ mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:35.804 # +failover-state-reconf-slaves master mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:35.884 * +slave-reconf-sent slave 10.10.7.105:7002 10.10.7.105 7002 @ mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:36.060 # -odown master mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:36.858 * +slave-reconf-inprog slave 10.10.7.105:7002 10.10.7.105 7002 @ mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:36.858 * +slave-reconf-done slave 10.10.7.105:7002 10.10.7.105 7002 @ mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:36.959 # +failover-end master mymaster 10.10.7.105 7000
1884:X 30 Dec 2019 23:31:36.959 # +switch-master mymaster 10.10.7.105 7000 10.10.7.105 7001
1884:X 30 Dec 2019 23:31:36.959 * +slave slave 10.10.7.105:7002 10.10.7.105 7002 @ mymaster 10.10.7.105 7001
1884:X 30 Dec 2019 23:31:36.959 * +slave slave 10.10.7.105:7000 10.10.7.105 7000 @ mymaster 10.10.7.105 7001
1884:X 30 Dec 2019 23:32:06.996 # +sdown slave 10.10.7.105:7000 10.10.7.105 7000 @ mymaster 10.10.7.105 7001
1884:X 31 Dec 2019 00:09:03.593 # -sdown slave 10.10.7.105:7000 10.10.7.105 7000 @ mymaster 10.10.7.105 7001
1884:X 31 Dec 2019 00:09:13.545 * +convert-to-slave slave 10.10.7.105:7000 10.10.7.105 7000 @ mymaster 10.10.7.105 7001
[root@localhost redis-5.0.7]# cat 27002.log
1839:X 30 Dec 2019 23:01:03.016 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1839:X 30 Dec 2019 23:01:03.016 # Redis version=5.0.7, bits=64, commit=00000000, modified=0, pid=1839, just started
1839:X 30 Dec 2019 23:01:03.016 # Configuration loaded
1839:X 30 Dec 2019 23:01:03.016 * Increased maximum number of open files to 10032 (it was originally set to 1024).
1839:X 30 Dec 2019 23:01:03.017 * Running mode=sentinel, port=27002.
1839:X 30 Dec 2019 23:01:03.017 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
1839:X 30 Dec 2019 23:01:03.018 # Sentinel ID is ec863fa8013b44c9f9b0df0794bcd06acd197702
1839:X 30 Dec 2019 23:01:03.018 # +monitor master mymaster 10.10.7.105 7000 quorum 2
1839:X 30 Dec 2019 23:01:03.019 * +slave slave 10.10.7.105:7001 10.10.7.105 7001 @ mymaster 10.10.7.105 7000
1839:X 30 Dec 2019 23:01:03.020 * +slave slave 10.10.7.105:7002 10.10.7.105 7002 @ mymaster 10.10.7.105 7000
1839:X 30 Dec 2019 23:01:03.363 * +sentinel sentinel a4db54b4a862c06987494943d793f2c6a47e0d05 10.10.7.105 27001 @ mymaster 10.10.7.105 7000
1839:X 30 Dec 2019 23:01:03.620 * +sentinel sentinel 7a63a8db891d8d277abddac20d0a85c5852c3a33 10.10.7.105 27000 @ mymaster 10.10.7.105 7000
1839:X 30 Dec 2019 23:17:38.554 # +sdown sentinel a4db54b4a862c06987494943d793f2c6a47e0d05 10.10.7.105 27001 @ mymaster 10.10.7.105 7000
1839:X 30 Dec 2019 23:18:12.943 # -sdown sentinel a4db54b4a862c06987494943d793f2c6a47e0d05 10.10.7.105 27001 @ mymaster 10.10.7.105 7000
1839:X 30 Dec 2019 23:31:34.733 # +sdown master mymaster 10.10.7.105 7000
1839:X 30 Dec 2019 23:31:34.883 # +new-epoch 1
1839:X 30 Dec 2019 23:31:34.886 # +vote-for-leader a4db54b4a862c06987494943d793f2c6a47e0d05 1
1839:X 30 Dec 2019 23:31:35.817 # +odown master mymaster 10.10.7.105 7000 #quorum 3/2
1839:X 30 Dec 2019 23:31:35.818 # Next failover delay: I will not start a failover before Mon Dec 30 23:37:35 2019
1839:X 30 Dec 2019 23:31:35.890 # +config-update-from sentinel a4db54b4a862c06987494943d793f2c6a47e0d05 10.10.7.105 27001 @ mymaster 10.10.7.105 7000
1839:X 30 Dec 2019 23:31:35.890 # +switch-master mymaster 10.10.7.105 7000 10.10.7.105 7001
1839:X 30 Dec 2019 23:31:35.890 * +slave slave 10.10.7.105:7002 10.10.7.105 7002 @ mymaster 10.10.7.105 7001
1839:X 30 Dec 2019 23:31:35.890 * +slave slave 10.10.7.105:7000 10.10.7.105 7000 @ mymaster 10.10.7.105 7001
1839:X 30 Dec 2019 23:32:05.945 # +sdown slave 10.10.7.105:7000 10.10.7.105 7000 @ mymaster 10.10.7.105 7001
1839:X 31 Dec 2019 00:09:03.798 # -sdown slave 10.10.7.105:7000 10.10.7.105 7000 @ mymaster 10.10.7.105 7001
[root@localhost redis-5.0.7]#
```
```py
from redis.sentinel import Sentinel
sentinel = Sentinel([('10.10.7.105', 27000), ('10.10.7.105', 27001), ('10.10.7.105', 27002)], socket_timeout=0.1)
print(sentinel.discover_master('mymaster'))
# ('10.10.7.105', 7001)
print(sentinel.discover_slaves('mymaster'))`
# [('10.10.7.105', 7002), ('10.10.7.105', 7000)]
```


<Valine />