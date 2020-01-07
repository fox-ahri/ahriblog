---
title: Redis集群
sidebarDepth: 3
---

## 本页目录

[[toc]]
::: tip

#### 非 root 用户 请添加 sudo

:::

## Redis 集群

> 通过集群，Redis 解决了写操作无法负载均衡，以及存储能力受单机限制的问题，实现了较为完善的高可用。

![Redis Cluster](./static/rediscluster.png)

## 搭建 Redis 集群

```sh
[root@localhost redis]# pwd
/root/redis
[root@localhost redis]# ls redis-5.0.7
00-RELEASENOTES  CONTRIBUTING  deps     Makefile   README.md   runtest          runtest-moduleapi  sentinel.conf  tests
BUGS             COPYING       INSTALL  MANIFESTO  redis.conf  runtest-cluster  runtest-sentinel   src            utils
[root@localhost redis]# mkdir redis7000 # 0 - 7
[root@localhost redis]# ls
redis-5.0.7  redis-5.0.7.tar.gz  redis7000  redis7001  redis7002  redis7003  redis7004  redis7005  redis7006  redis7007
[root@localhost redis]# cp redis-5.0.7/redis.conf ./redis7000
[root@localhost redis]# cd redis7000
[root@localhost redis7000]# vim redis.conf
```

#### 更改配置文件

```sh
bind 127.0.0.1
# 改为
bind 10.10.10.100

port 7000
# 改为
port 7000

daemonize no
# 改为
daemonize yes

pidfile /var/run/redis_6379.pid
# 改为
pidfile /var/run/redis_7000.pid

dir ./
# 改为
dir /root/redis/redis7000

cluster-enabled yes # 取消注释

# cluster-config-file nodes-6379.conf
# 改为
cluster-config-file nodes-7000.conf

cluster-node-timeout 15000 # 取消注释
cluster-replica-validity-factor 10 # 取消注释
cluster-migration-barrier 1 # 取消注释
cluster-require-full-coverage yes # 取消注释 - 有 node 宕机，集群是否仍可用(yes 允许数据丢失)
cluster-replica-no-failover no # 取消注释
```

#### 更改其他实例配置文件

```sh
[root@localhost redis]# ls
redis-5.0.7  redis-5.0.7.tar.gz  redis7000  redis7001  redis7002  redis7003  redis7004  redis7005  redis7006  redis7007
[root@localhost redis]# sed 's/7000/7001/g' redis7000/redis.conf > redis7001/redis.conf
[root@localhost redis]# sed 's/7000/7002/g' redis7000/redis.conf > redis7002/redis.conf
[root@localhost redis]# sed 's/7000/7003/g' redis7000/redis.conf > redis7003/redis.conf
[root@localhost redis]# sed 's/7000/7004/g' redis7000/redis.conf > redis7004/redis.conf
[root@localhost redis]# sed 's/7000/7005/g' redis7000/redis.conf > redis7005/redis.conf
[root@localhost redis]# sed 's/7000/7006/g' redis7000/redis.conf > redis7006/redis.conf
[root@localhost redis]# sed 's/7000/7007/g' redis7000/redis.conf > redis7007/redis.conf
[root@localhost redis]#
```

#### 启动集群的每个实例

```sh
[root@localhost redis]# ls
redis-5.0.7  redis-5.0.7.tar.gz  redis7000  redis7001  redis7002  redis7003  redis7004  redis7005  redis7006  redis7007
[root@localhost redis]# ./redis-5.0.7/src/redis-server ./redis7000/redis.conf
6372:C 31 Dec 2019 01:05:06.225 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
6372:C 31 Dec 2019 01:05:06.225 # Redis version=5.0.7, bits=64, commit=00000000, modified=0, pid=6372, just started
6372:C 31 Dec 2019 01:05:06.225 # Configuration loaded
[root@localhost redis]# ./redis-5.0.7/src/redis-server ./redis7001/redis.conf
6377:C 31 Dec 2019 01:05:11.147 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
6377:C 31 Dec 2019 01:05:11.147 # Redis version=5.0.7, bits=64, commit=00000000, modified=0, pid=6377, just started
6377:C 31 Dec 2019 01:05:11.147 # Configuration loaded
[root@localhost redis]# ./redis-5.0.7/src/redis-server ./redis7002/redis.conf
6382:C 31 Dec 2019 01:05:15.048 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
6382:C 31 Dec 2019 01:05:15.048 # Redis version=5.0.7, bits=64, commit=00000000, modified=0, pid=6382, just started
6382:C 31 Dec 2019 01:05:15.048 # Configuration loaded
[root@localhost redis]# ./redis-5.0.7/src/redis-server ./redis7003/redis.conf
6387:C 31 Dec 2019 01:05:19.337 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
6387:C 31 Dec 2019 01:05:19.337 # Redis version=5.0.7, bits=64, commit=00000000, modified=0, pid=6387, just started
6387:C 31 Dec 2019 01:05:19.337 # Configuration loaded
[root@localhost redis]# ./redis-5.0.7/src/redis-server ./redis7004/redis.conf
6392:C 31 Dec 2019 01:05:22.591 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
6392:C 31 Dec 2019 01:05:22.591 # Redis version=5.0.7, bits=64, commit=00000000, modified=0, pid=6392, just started
6392:C 31 Dec 2019 01:05:22.591 # Configuration loaded
[root@localhost redis]# ./redis-5.0.7/src/redis-server ./redis7005/redis.conf
6397:C 31 Dec 2019 01:05:26.749 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
6397:C 31 Dec 2019 01:05:26.749 # Redis version=5.0.7, bits=64, commit=00000000, modified=0, pid=6397, just started
6397:C 31 Dec 2019 01:05:26.749 # Configuration loaded
[root@localhost redis]# netstat -ntlp
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 10.10.10.100:7000        0.0.0.0:*               LISTEN      6373/./redis-5.0.7/
tcp        0      0 10.10.10.100:7001        0.0.0.0:*               LISTEN      6378/./redis-5.0.7/
tcp        0      0 127.0.0.1:25            0.0.0.0:*               LISTEN      1271/master
tcp        0      0 10.10.10.100:7002        0.0.0.0:*               LISTEN      6383/./redis-5.0.7/
tcp        0      0 10.10.10.100:7003        0.0.0.0:*               LISTEN      6388/./redis-5.0.7/
tcp        0      0 10.10.10.100:7004        0.0.0.0:*               LISTEN      6393/./redis-5.0.7/
tcp        0      0 10.10.10.100:7005        0.0.0.0:*               LISTEN      6398/./redis-5.0.7/
tcp        0      0 10.10.10.100:17000       0.0.0.0:*               LISTEN      6373/./redis-5.0.7/
tcp        0      0 10.10.10.100:17001       0.0.0.0:*               LISTEN      6378/./redis-5.0.7/
tcp        0      0 10.10.10.100:17002       0.0.0.0:*               LISTEN      6383/./redis-5.0.7/
tcp        0      0 10.10.10.100:17003       0.0.0.0:*               LISTEN      6388/./redis-5.0.7/
tcp        0      0 10.10.10.100:17004       0.0.0.0:*               LISTEN      6393/./redis-5.0.7/
tcp        0      0 10.10.10.100:17005       0.0.0.0:*               LISTEN      6398/./redis-5.0.7/
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      1112/sshd
tcp6       0      0 ::1:25                  :::*                    LISTEN      1271/master
tcp6       0      0 :::22                   :::*                    LISTEN      1112/sshd
[root@localhost redis]# ps -ef | grep redis
root       6373      1  0 01:05 ?        00:00:00 ./redis-5.0.7/src/redis-server 10.10.10.100:7000 [cluster]
root       6378      1  0 01:05 ?        00:00:00 ./redis-5.0.7/src/redis-server 10.10.10.100:7001 [cluster]
root       6383      1  0 01:05 ?        00:00:00 ./redis-5.0.7/src/redis-server 10.10.10.100:7002 [cluster]
root       6388      1  0 01:05 ?        00:00:00 ./redis-5.0.7/src/redis-server 10.10.10.100:7003 [cluster]
root       6393      1  0 01:05 ?        00:00:00 ./redis-5.0.7/src/redis-server 10.10.10.100:7004 [cluster]
root       6398      1  0 01:05 ?        00:00:00 ./redis-5.0.7/src/redis-server 10.10.10.100:7005 [cluster]
root       6405   1849  0 01:10 pts/3    00:00:00 grep --color=auto redis
[root@localhost redis]#
```

::: danger 不能直接使用单个实例

```sh
[root@localhost redis]# ./redis-5.0.7/src/redis-cli -h 10.10.10.100 -p 7000 -c
10.10.10.100:7000> set hello world
(error) CLUSTERDOWN Hash slot not served
10.10.10.100:7000> exit
[root@localhost redis]#
```

:::

### 原生搭建(简单介绍)

```sh
cluster meet <ip> <port> # 添加 node
cluster addslots <slot> # 指派槽
cluster replicate <node-id> # 分配主从
```

### redis 工具搭建

```sh
[root@localhost redis]# ./redis-5.0.7/src/redis-cli \
                        --cluster create 10.10.10.100:7000 \
                        10.10.10.100:7001 \
                        10.10.10.100:7002 \
                        10.10.10.100:7003 \
                        10.10.10.100:7004 \
                        10.10.10.100:7005 \
                        --cluster-replicas 1 # 每个 master 附带 slave 的个数
                        # 默认 前三个(7000 7001 7002) 是 master
>>> Performing hash slots allocation on 6 nodes...
Master[0] -> Slots 0 - 5460
Master[1] -> Slots 5461 - 10922
Master[2] -> Slots 10923 - 16383
Adding replica 10.10.10.100:7004 to 10.10.10.100:7000
Adding replica 10.10.10.100:7005 to 10.10.10.100:7001
Adding replica 10.10.10.100:7003 to 10.10.10.100:7002
>>> Trying to optimize slaves allocation for anti-affinity
[WARNING] Some slaves are in the same host as their master
M: b56300a378a771ef6f4a2f0e0d1a5972c81830de 10.10.10.100:7000
   slots:[0-5460] (5461 slots) master
M: 0c09eadc3459a1ddca545152c6546b30e5158046 10.10.10.100:7001
   slots:[5461-10922] (5462 slots) master
M: eea59e6b67de7864dbf10776214906916a60c69c 10.10.10.100:7002
   slots:[10923-16383] (5461 slots) master
S: 895ed0fda9be28a642180f98e83d58b7b6c2f5b4 10.10.10.100:7003
   replicates b56300a378a771ef6f4a2f0e0d1a5972c81830de
S: 2e1f5cc3cc7a272174b806456511933bd1325bb2 10.10.10.100:7004
   replicates 0c09eadc3459a1ddca545152c6546b30e5158046
S: 9a48630396f274b5154bef4c340ab4956a9a9613 10.10.10.100:7005
   replicates eea59e6b67de7864dbf10776214906916a60c69c
Can I set the above configuration? (type 'yes' to accept): yes
>>> Nodes configuration updated
>>> Assign a different config epoch to each node
>>> Sending CLUSTER MEET messages to join the cluster
Waiting for the cluster to join
...
>>> Performing Cluster Check (using node 10.10.10.100:7000)
M: b56300a378a771ef6f4a2f0e0d1a5972c81830de 10.10.10.100:7000
   slots:[0-5460] (5461 slots) master
   1 additional replica(s)
M: eea59e6b67de7864dbf10776214906916a60c69c 10.10.10.100:7002
   slots:[10923-16383] (5461 slots) master
   1 additional replica(s)
S: 895ed0fda9be28a642180f98e83d58b7b6c2f5b4 10.10.10.100:7003
   slots: (0 slots) slave
   replicates b56300a378a771ef6f4a2f0e0d1a5972c81830de
S: 2e1f5cc3cc7a272174b806456511933bd1325bb2 10.10.10.100:7004
   slots: (0 slots) slave
   replicates 0c09eadc3459a1ddca545152c6546b30e5158046
S: 9a48630396f274b5154bef4c340ab4956a9a9613 10.10.10.100:7005
   slots: (0 slots) slave
   replicates eea59e6b67de7864dbf10776214906916a60c69c
M: 0c09eadc3459a1ddca545152c6546b30e5158046 10.10.10.100:7001
   slots:[5461-10922] (5462 slots) master
   1 additional replica(s)
[OK] All nodes agree about slots configuration.
>>> Check for open slots...
>>> Check slots coverage...
[OK] All 16384 slots covered.
[root@localhost redis]#
```

::: danger 普通客户端登陆

```sh
[root@localhost redis]# ./redis-5.0.7/src/redis-cli -h 10.10.10.100 -p 7000
10.10.10.100:7000> set hello ahri # hello 槽位是 866 属于这个 node，可以 set
OK
10.10.10.100:7000> set k1 v1 # k1 槽位是 12706 不属于这个 node，不能 set
(error) MOVED 12706 10.10.10.100:7002
10.10.10.100:7000> exit
[root@localhost redis]#
```

:::
::: tip 集群客户端登陆

```sh
[root@localhost redis]# ./redis-5.0.7/src/redis-cli -h 10.10.10.100 -p 7000 -c
10.10.10.100:7000> set k1 v1
-> Redirected to slot [12706] located at 10.10.10.100:7002 # 自动重定向到 7002 的 node
OK
10.10.10.100:7002> get hello
-> Redirected to slot [866] located at 10.10.10.100:7000 # 自动重定向到 7000 的 node
"ahri"
10.10.10.100:7000> exit
[root@localhost redis]#
```

:::

### 查看集群信息

```sh
[root@localhost redis]# ./redis-5.0.7/src/redis-cli -h 10.10.10.100 -p 7000 -c
10.10.10.100:7000> cluster nodes
eea59e6b67de7864dbf10776214906916a60c69c 10.10.10.100:7002@17002 master - 0 1577773930847 3 connected 10923-16383
895ed0fda9be28a642180f98e83d58b7b6c2f5b4 10.10.10.100:7003@17003 slave b56300a378a771ef6f4a2f0e0d1a5972c81830de 0 1577773930000 4 connected
2e1f5cc3cc7a272174b806456511933bd1325bb2 10.10.10.100:7004@17004 slave 0c09eadc3459a1ddca545152c6546b30e5158046 0 1577773929000 5 connected
b56300a378a771ef6f4a2f0e0d1a5972c81830de 10.10.10.100:7000@17000 myself,master - 0 1577773929000 1 connected 0-5460
9a48630396f274b5154bef4c340ab4956a9a9613 10.10.10.100:7005@17005 slave eea59e6b67de7864dbf10776214906916a60c69c 0 1577773929839 6 connected
0c09eadc3459a1ddca545152c6546b30e5158046 10.10.10.100:7001@17001 master - 0 1577773929000 2 connected 5461-10922
10.10.10.100:7000>
```

## Python3 连接

```py
from rediscluster import StrictRedisCluster

redis_nodes = [
    {'host': '10.10.10.100', 'port': 7000},
    {'host': '10.10.10.100', 'port': 7001},
    {'host': '10.10.10.100', 'port': 7002},
    {'host': '10.10.10.100', 'port': 7003},
    {'host': '10.10.10.100', 'port': 7004},
    {'host': '10.10.10.100', 'port': 7005}
]
redisconn = StrictRedisCluster(startup_nodes=redis_nodes, decode_responses=True)
print(redisconn.get('hello'))
# ahri
```

## 横向扩容

### 启动新节点

```sh
[root@localhost redis]# ./redis-5.0.7/src/redis-server ./redis7006/redis.conf
6628:C 31 Dec 2019 02:04:50.117 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
6628:C 31 Dec 2019 02:04:50.117 # Redis version=5.0.7, bits=64, commit=00000000, modified=0, pid=6628, just started
6628:C 31 Dec 2019 02:04:50.117 # Configuration loaded
[root@localhost redis]# ./redis-5.0.7/src/redis-server ./redis7007/redis.conf
6633:C 31 Dec 2019 02:04:54.420 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
6633:C 31 Dec 2019 02:04:54.420 # Redis version=5.0.7, bits=64, commit=00000000, modified=0, pid=6633, just started
6633:C 31 Dec 2019 02:04:54.420 # Configuration loaded
[root@localhost redis]# ps -ef | grep redis
root       6373      1  0 01:05 ?        00:00:07 ./redis-5.0.7/src/redis-server 10.10.10.100:7000 [cluster]
root       6378      1  0 01:05 ?        00:00:07 ./redis-5.0.7/src/redis-server 10.10.10.100:7001 [cluster]
root       6383      1  0 01:05 ?        00:00:07 ./redis-5.0.7/src/redis-server 10.10.10.100:7002 [cluster]
root       6388      1  0 01:05 ?        00:00:07 ./redis-5.0.7/src/redis-server 10.10.10.100:7003 [cluster]
root       6393      1  0 01:05 ?        00:00:07 ./redis-5.0.7/src/redis-server 10.10.10.100:7004 [cluster]
root       6398      1  0 01:05 ?        00:00:07 ./redis-5.0.7/src/redis-server 10.10.10.100:7005 [cluster]
root       6629      1  0 02:04 ?        00:00:00 ./redis-5.0.7/src/redis-server 10.10.10.100:7006 [cluster]
root       6634      1  0 02:04 ?        00:00:00 ./redis-5.0.7/src/redis-server 10.10.10.100:7007 [cluster]
root       6639   1849  0 02:04 pts/3    00:00:00 grep --color=auto redis
[root@localhost redis]# ./redis-5.0.7/src/redis-cli -h 10.10.10.100 -p 7006 -c
10.10.10.100:7006> cluster nodes
3749b46bc60d39500fbb0c46c8ffd0a2971ad17e :7006@17006 myself,master - 0 0 0 connected
10.10.10.100:7006> exit
[root@localhost redis]#
```

### 添加到新节点集群

#### 添加到集群默认为 master

```sh
[root@localhost redis]# ./redis-5.0.7/src/redis-cli --cluster add-node 10.10.10.100:7006 10.10.10.100:7000
>>> Adding node 10.10.10.100:7006 to cluster 10.10.10.100:7000
>>> Performing Cluster Check (using node 10.10.10.100:7000)
M: b56300a378a771ef6f4a2f0e0d1a5972c81830de 10.10.10.100:7000
   slots:[0-5460] (5461 slots) master
   1 additional replica(s)
M: eea59e6b67de7864dbf10776214906916a60c69c 10.10.10.100:7002
   slots:[10923-16383] (5461 slots) master
   1 additional replica(s)
S: 895ed0fda9be28a642180f98e83d58b7b6c2f5b4 10.10.10.100:7003
   slots: (0 slots) slave
   replicates b56300a378a771ef6f4a2f0e0d1a5972c81830de
S: 2e1f5cc3cc7a272174b806456511933bd1325bb2 10.10.10.100:7004
   slots: (0 slots) slave
   replicates 0c09eadc3459a1ddca545152c6546b30e5158046
S: 9a48630396f274b5154bef4c340ab4956a9a9613 10.10.10.100:7005
   slots: (0 slots) slave
   replicates eea59e6b67de7864dbf10776214906916a60c69c
M: 0c09eadc3459a1ddca545152c6546b30e5158046 10.10.10.100:7001
   slots:[5461-10922] (5462 slots) master
   1 additional replica(s)
[OK] All nodes agree about slots configuration.
>>> Check for open slots...
>>> Check slots coverage...
[OK] All 16384 slots covered.
>>> Send CLUSTER MEET to node 10.10.10.100:7006 to make it join the cluster.
[OK] New node added correctly.
[root@localhost redis]# ./redis-5.0.7/src/redis-cli -h 10.10.10.100 -p 7000
10.10.10.100:7000> cluster nodes
eea59e6b67de7864dbf10776214906916a60c69c 10.10.10.100:7002@17002 master - 0 1577776267000 3 connected 10923-16383
895ed0fda9be28a642180f98e83d58b7b6c2f5b4 10.10.10.100:7003@17003 slave b56300a378a771ef6f4a2f0e0d1a5972c81830de 0 1577776264000 4 connected
2e1f5cc3cc7a272174b806456511933bd1325bb2 10.10.10.100:7004@17004 slave 0c09eadc3459a1ddca545152c6546b30e5158046 0 1577776267000 5 connected
b56300a378a771ef6f4a2f0e0d1a5972c81830de 10.10.10.100:7000@17000 myself,master - 0 1577776266000 1 connected 0-5460
9a48630396f274b5154bef4c340ab4956a9a9613 10.10.10.100:7005@17005 slave eea59e6b67de7864dbf10776214906916a60c69c 0 1577776268487 6 connected
3749b46bc60d39500fbb0c46c8ffd0a2971ad17e 10.10.10.100:7006@17006 master - 0 1577776265464 0 connected
0c09eadc3459a1ddca545152c6546b30e5158046 10.10.10.100:7001@17001 master - 0 1577776267479 2 connected 5461-10922
10.10.10.100:7000> exit
[root@localhost redis]#
```

#### 以 slave 身份添加到集群

```sh
[root@localhost redis]# ./redis-5.0.7/src/redis-cli --cluster add-node 10.10.10.100:7007 10.10.10.100:7000 --cluster-slave --cluster-master-id 3749b46bc60d39500fbb0c46c8ffd0a2971ad17e
>>> Adding node 10.10.10.100:7007 to cluster 10.10.10.100:7000
>>> Performing Cluster Check (using node 10.10.10.100:7000)
M: b56300a378a771ef6f4a2f0e0d1a5972c81830de 10.10.10.100:7000
   slots:[0-5460] (5461 slots) master
   1 additional replica(s)
M: eea59e6b67de7864dbf10776214906916a60c69c 10.10.10.100:7002
   slots:[10923-16383] (5461 slots) master
   1 additional replica(s)
S: 895ed0fda9be28a642180f98e83d58b7b6c2f5b4 10.10.10.100:7003
   slots: (0 slots) slave
   replicates b56300a378a771ef6f4a2f0e0d1a5972c81830de
S: 2e1f5cc3cc7a272174b806456511933bd1325bb2 10.10.10.100:7004
   slots: (0 slots) slave
   replicates 0c09eadc3459a1ddca545152c6546b30e5158046
S: 9a48630396f274b5154bef4c340ab4956a9a9613 10.10.10.100:7005
   slots: (0 slots) slave
   replicates eea59e6b67de7864dbf10776214906916a60c69c
M: 3749b46bc60d39500fbb0c46c8ffd0a2971ad17e 10.10.10.100:7006
   slots: (0 slots) master
M: 0c09eadc3459a1ddca545152c6546b30e5158046 10.10.10.100:7001
   slots:[5461-10922] (5462 slots) master
   1 additional replica(s)
[OK] All nodes agree about slots configuration.
>>> Check for open slots...
>>> Check slots coverage...
[OK] All 16384 slots covered.
>>> Send CLUSTER MEET to node 10.10.10.100:7007 to make it join the cluster.
Waiting for the cluster to join

>>> Configure node as replica of 10.10.10.100:7006.
[OK] New node added correctly.
[root@localhost redis]# ./redis-5.0.7/src/redis-cli -h 10.10.10.100 -p 7000
10.10.10.100:7000> cluster nodes
eea59e6b67de7864dbf10776214906916a60c69c 10.10.10.100:7002@17002 master - 0 1577776429766 3 connected 10923-16383
e994a59926e2d1590ee62bb662428ca3efab8df4 10.10.10.100:7007@17007 slave 3749b46bc60d39500fbb0c46c8ffd0a2971ad17e 0 1577776427000 0 connected
895ed0fda9be28a642180f98e83d58b7b6c2f5b4 10.10.10.100:7003@17003 slave b56300a378a771ef6f4a2f0e0d1a5972c81830de 0 1577776431000 4 connected
2e1f5cc3cc7a272174b806456511933bd1325bb2 10.10.10.100:7004@17004 slave 0c09eadc3459a1ddca545152c6546b30e5158046 0 1577776427000 5 connected
b56300a378a771ef6f4a2f0e0d1a5972c81830de 10.10.10.100:7000@17000 myself,master - 0 1577776425000 1 connected 0-5460
9a48630396f274b5154bef4c340ab4956a9a9613 10.10.10.100:7005@17005 slave eea59e6b67de7864dbf10776214906916a60c69c 0 1577776428759 6 connected
3749b46bc60d39500fbb0c46c8ffd0a2971ad17e 10.10.10.100:7006@17006 master - 0 1577776430774 0 connected
0c09eadc3459a1ddca545152c6546b30e5158046 10.10.10.100:7001@17001 master - 0 1577776431780 2 connected 5461-10922
10.10.10.100:7000> exit
[root@localhost redis]#
```

#### 给新节点分配槽

```sh
[root@localhost redis]# ./redis-5.0.7/src/redis-cli --cluster reshard 10.10.10.100:7000
>>> Performing Cluster Check (using node 10.10.10.100:7000)
M: b56300a378a771ef6f4a2f0e0d1a5972c81830de 10.10.10.100:7000
   slots:[0-5460] (5461 slots) master
   1 additional replica(s)
M: eea59e6b67de7864dbf10776214906916a60c69c 10.10.10.100:7002
   slots:[10923-16383] (5461 slots) master
   1 additional replica(s)
S: e994a59926e2d1590ee62bb662428ca3efab8df4 10.10.10.100:7007
   slots: (0 slots) slave
   replicates 3749b46bc60d39500fbb0c46c8ffd0a2971ad17e
S: 895ed0fda9be28a642180f98e83d58b7b6c2f5b4 10.10.10.100:7003
   slots: (0 slots) slave
   replicates b56300a378a771ef6f4a2f0e0d1a5972c81830de
S: 2e1f5cc3cc7a272174b806456511933bd1325bb2 10.10.10.100:7004
   slots: (0 slots) slave
   replicates 0c09eadc3459a1ddca545152c6546b30e5158046
S: 9a48630396f274b5154bef4c340ab4956a9a9613 10.10.10.100:7005
   slots: (0 slots) slave
   replicates eea59e6b67de7864dbf10776214906916a60c69c
M: 3749b46bc60d39500fbb0c46c8ffd0a2971ad17e 10.10.10.100:7006
   slots: (0 slots) master
   1 additional replica(s)
M: 0c09eadc3459a1ddca545152c6546b30e5158046 10.10.10.100:7001
   slots:[5461-10922] (5462 slots) master
   1 additional replica(s)
[OK] All nodes agree about slots configuration.
>>> Check for open slots...
>>> Check slots coverage...
[OK] All 16384 slots covered.
How many slots do you want to move (from 1 to 16384)? 6000
What is the receiving node ID? 3749b46bc60d39500fbb0c46c8ffd0a2971ad17e
Please enter all the source node IDs.
  Type 'all' to use all the nodes as source nodes for the hash slots.
  Type 'done' once you entered all the source nodes IDs.
Source node #1: b56300a378a771ef6f4a2f0e0d1a5972c81830de
Source node #2: 0c09eadc3459a1ddca545152c6546b30e5158046
Source node #3: eea59e6b67de7864dbf10776214906916a60c69c
Source node #4: done

Ready to move 6000 slots.
  Source nodes:
    M: b56300a378a771ef6f4a2f0e0d1a5972c81830de 10.10.10.100:7000
       slots:[0-5460] (5461 slots) master
       1 additional replica(s)
    M: 0c09eadc3459a1ddca545152c6546b30e5158046 10.10.10.100:7001
       slots:[5461-10922] (5462 slots) master
       1 additional replica(s)
    M: eea59e6b67de7864dbf10776214906916a60c69c 10.10.10.100:7002
       slots:[10923-16383] (5461 slots) master
       1 additional replica(s)
  Destination node:
    M: 3749b46bc60d39500fbb0c46c8ffd0a2971ad17e 10.10.10.100:7006
       slots: (0 slots) master
       1 additional replica(s)
  Resharding plan:
    Moving slot 5461 from 0c09eadc3459a1ddca545152c6546b30e5158046
    ......
    Moving slot 12921 from eea59e6b67de7864dbf10776214906916a60c69c
Do you want to proceed with the proposed reshard plan (yes/no)? yes
Moving slot 5461 from 10.10.10.100:7001 to 10.10.10.100:7006:
......
Moving slot 12921 from 10.10.10.100:7002 to 10.10.10.100:7006:
[root@localhost redis]# ./redis-5.0.7/src/redis-cli -h 10.10.10.100 -p 7000
10.10.10.100:7000> cluster nodes
eea59e6b67de7864dbf10776214906916a60c69c 10.10.10.100:7002@17002 master - 0 1577777002000 3 connected 12922-16383
e994a59926e2d1590ee62bb662428ca3efab8df4 10.10.10.100:7007@17007 slave 3749b46bc60d39500fbb0c46c8ffd0a2971ad17e 0 1577777004000 7 connected
895ed0fda9be28a642180f98e83d58b7b6c2f5b4 10.10.10.100:7003@17003 slave b56300a378a771ef6f4a2f0e0d1a5972c81830de 0 1577777001000 4 connected
2e1f5cc3cc7a272174b806456511933bd1325bb2 10.10.10.100:7004@17004 slave 0c09eadc3459a1ddca545152c6546b30e5158046 0 1577777002099 5 connected
b56300a378a771ef6f4a2f0e0d1a5972c81830de 10.10.10.100:7000@17000 myself,master - 0 1577777000000 1 connected 1999-5460
9a48630396f274b5154bef4c340ab4956a9a9613 10.10.10.100:7005@17005 slave eea59e6b67de7864dbf10776214906916a60c69c 0 1577777005121 6 connected
3749b46bc60d39500fbb0c46c8ffd0a2971ad17e 10.10.10.100:7006@17006 master - 0 1577777003106 7 connected 0-1998 5461-7461 10923-12921
0c09eadc3459a1ddca545152c6546b30e5158046 10.10.10.100:7001@17001 master - 0 1577777004113 2 connected 7462-10922
10.10.10.100:7000> exit
[root@localhost redis]#
```

## 高可用测试

```sh
[root@localhost redis]# netstat -ntlp
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 10.10.10.100:7000        0.0.0.0:*               LISTEN      6373/./redis-5.0.7/
tcp        0      0 10.10.10.100:7001        0.0.0.0:*               LISTEN      6378/./redis-5.0.7/
tcp        0      0 127.0.0.1:25            0.0.0.0:*               LISTEN      1271/master
tcp        0      0 10.10.10.100:7002        0.0.0.0:*               LISTEN      6383/./redis-5.0.7/
tcp        0      0 10.10.10.100:7003        0.0.0.0:*               LISTEN      6388/./redis-5.0.7/
tcp        0      0 10.10.10.100:7004        0.0.0.0:*               LISTEN      6393/./redis-5.0.7/
tcp        0      0 10.10.10.100:7005        0.0.0.0:*               LISTEN      6398/./redis-5.0.7/
tcp        0      0 10.10.10.100:7006        0.0.0.0:*               LISTEN      6629/./redis-5.0.7/
tcp        0      0 10.10.10.100:7007        0.0.0.0:*               LISTEN      6634/./redis-5.0.7/
tcp        0      0 10.10.10.100:17000       0.0.0.0:*               LISTEN      6373/./redis-5.0.7/
tcp        0      0 10.10.10.100:17001       0.0.0.0:*               LISTEN      6378/./redis-5.0.7/
tcp        0      0 10.10.10.100:17002       0.0.0.0:*               LISTEN      6383/./redis-5.0.7/
tcp        0      0 10.10.10.100:17003       0.0.0.0:*               LISTEN      6388/./redis-5.0.7/
tcp        0      0 10.10.10.100:17004       0.0.0.0:*               LISTEN      6393/./redis-5.0.7/
tcp        0      0 10.10.10.100:17005       0.0.0.0:*               LISTEN      6398/./redis-5.0.7/
tcp        0      0 10.10.10.100:17006       0.0.0.0:*               LISTEN      6629/./redis-5.0.7/
tcp        0      0 10.10.10.100:17007       0.0.0.0:*               LISTEN      6634/./redis-5.0.7/
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      1112/sshd
tcp6       0      0 ::1:25                  :::*                    LISTEN      1271/master
tcp6       0      0 :::22                   :::*                    LISTEN      1112/sshd
[root@localhost redis]# kill -9 6373
[root@localhost redis]# ./redis-5.0.7/src/redis-cli -h 10.10.10.100 -p 7001
10.10.10.100:7001> cluster nodes
895ed0fda9be28a642180f98e83d58b7b6c2f5b4 10.10.10.100:7003@17003 slave b56300a378a771ef6f4a2f0e0d1a5972c81830de 0 1577777093756 1 connected
e994a59926e2d1590ee62bb662428ca3efab8df4 10.10.10.100:7007@17007 slave 3749b46bc60d39500fbb0c46c8ffd0a2971ad17e 0 1577777094768 7 connected
eea59e6b67de7864dbf10776214906916a60c69c 10.10.10.100:7002@17002 master - 0 1577777091732 3 connected 12922-16383
9a48630396f274b5154bef4c340ab4956a9a9613 10.10.10.100:7005@17005 slave eea59e6b67de7864dbf10776214906916a60c69c 0 1577777092746 6 connected
0c09eadc3459a1ddca545152c6546b30e5158046 10.10.10.100:7001@17001 myself,master - 0 1577777090000 2 connected 7462-10922
b56300a378a771ef6f4a2f0e0d1a5972c81830de 10.10.10.100:7000@17000 master - 1577777080413 1577777078000 1 disconnected 1999-5460
2e1f5cc3cc7a272174b806456511933bd1325bb2 10.10.10.100:7004@17004 slave 0c09eadc3459a1ddca545152c6546b30e5158046 0 1577777091000 5 connected
3749b46bc60d39500fbb0c46c8ffd0a2971ad17e 10.10.10.100:7006@17006 master - 0 1577777092000 7 connected 0-1998 5461-7461 10923-12921
# 稍等
10.10.10.100:7001> cluster nodes
895ed0fda9be28a642180f98e83d58b7b6c2f5b4 10.10.10.100:7003@17003 master - 0 1577777396000 10 connected 1999-5460
e994a59926e2d1590ee62bb662428ca3efab8df4 10.10.10.100:7007@17007 slave 3749b46bc60d39500fbb0c46c8ffd0a2971ad17e 0 1577777393000 7 connected
eea59e6b67de7864dbf10776214906916a60c69c 10.10.10.100:7002@17002 master - 0 1577777396464 3 connected 12922-16383
9a48630396f274b5154bef4c340ab4956a9a9613 10.10.10.100:7005@17005 slave eea59e6b67de7864dbf10776214906916a60c69c 0 1577777395000 6 connected
0c09eadc3459a1ddca545152c6546b30e5158046 10.10.10.100:7001@17001 myself,master - 0 1577777390000 2 connected 7462-10922
b56300a378a771ef6f4a2f0e0d1a5972c81830de 10.10.10.100:7000@17000 master,fail - 1577777376861 1577777373000 9 disconnected
2e1f5cc3cc7a272174b806456511933bd1325bb2 10.10.10.100:7004@17004 slave 0c09eadc3459a1ddca545152c6546b30e5158046 0 1577777394000 5 connected
3749b46bc60d39500fbb0c46c8ffd0a2971ad17e 10.10.10.100:7006@17006 master - 0 1577777395000 7 connected 0-1998 5461-7461 10923-12921
10.10.10.100:7001> exit
[root@localhost redis]# ./redis-5.0.7/src/redis-server ./redis7000/redis.conf
6664:C 31 Dec 2019 02:25:25.796 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
6664:C 31 Dec 2019 02:25:25.796 # Redis version=5.0.7, bits=64, commit=00000000, modified=0, pid=6664, just started
6664:C 31 Dec 2019 02:25:25.796 # Configuration loaded
[root@localhost redis]# ./redis-5.0.7/src/redis-cli -h 10.10.10.100 -p 7001
10.10.10.100:7001> cluster nodes
895ed0fda9be28a642180f98e83d58b7b6c2f5b4 10.10.10.100:7003@17003 master - 0 1577777127113 8 connected 1999-5460
e994a59926e2d1590ee62bb662428ca3efab8df4 10.10.10.100:7007@17007 slave 3749b46bc60d39500fbb0c46c8ffd0a2971ad17e 0 1577777129128 7 connected
eea59e6b67de7864dbf10776214906916a60c69c 10.10.10.100:7002@17002 master - 0 1577777126000 3 connected 12922-16383
9a48630396f274b5154bef4c340ab4956a9a9613 10.10.10.100:7005@17005 slave eea59e6b67de7864dbf10776214906916a60c69c 0 1577777125095 6 connected
0c09eadc3459a1ddca545152c6546b30e5158046 10.10.10.100:7001@17001 myself,master - 0 1577777126000 2 connected 7462-10922
b56300a378a771ef6f4a2f0e0d1a5972c81830de 10.10.10.100:7000@17000 slave 895ed0fda9be28a642180f98e83d58b7b6c2f5b4 0 1577777125804 8 connected
2e1f5cc3cc7a272174b806456511933bd1325bb2 10.10.10.100:7004@17004 slave 0c09eadc3459a1ddca545152c6546b30e5158046 0 1577777125000 5 connected
3749b46bc60d39500fbb0c46c8ffd0a2971ad17e 10.10.10.100:7006@17006 master - 0 1577777128120 7 connected 0-1998 5461-7461 10923-12921
10.10.10.100:7001> exit
[root@localhost redis]#
```

<Valine />
