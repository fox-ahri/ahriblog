---
title: Cluster
---

## Cluster概念:
#### 系统扩展方式:
- Scale UP: 向上扩展(纵向扩展), 增强
- Scale OUT: 向外扩展(横向扩展), 增加设备, 调度分配问题, Cluster
#### Cluster: 集群, 为解决某个特定问题将多台计算机组合起来形成的单个系统
#### Linux Cluster类型:
- LB: Load Balancing, 负载均衡
- HA: High Availiablity, 高可用, SPOF(single Point Of failure)
    - MTBF: Mean Time Between Failure 平均无故障时间
    - MTTR: Mean Time To Restoration(repair) 平均恢复前时间
    - A = MTBF / (MTBF + MTTR) (0, 1)
- HPC: High-performance computing, 高性能, [http://www.top500.org](http://www.top500.org)
#### 分布式系统:
- 分布式存储: 云盘
- 分布式计算: hadoop, Spark


## Cluster分类:
#### LB Cluster的实现
#### 硬件
- F5 Big-IP
- Citrix Netscaler
- A10 A10
#### 软件
- lvs: Linux Virtual Server
- nginx: 支持七层调度
- haproxy: 支持七层调度
- ats: apache traffic server, (yahoo捐助)
- perlbal: Perl编写的
- pound
#### 传输层(通用): DPORT
- lvs
- nginx: stream
- haproxy: mode tcp
#### 应用层(专用): 针对特定协议, 自定义的请求模型分类
- proxy server:
    - http: nginx, httpd, haproxy(mode http), ...
    - fastcgi: nginx, httpd, ...
    - mysql: mysql-proxy, ...


## Cluster相关:
#### 会话保持, 负载均衡
- session sticky: 同一用户调度固定服务器
    - Source IP: LVS sh算法(对某一特定服务而言)
    - Cookie
- session replication: 每台服务器拥有全部session
    - session multicast cluster
- session server: 专门的session服务器
    - Memcached, Redis
#### HA集群实现方案
- keepalived: vrrp协议
- ais: 应用接口范围
    - heartbeat
    - cman + rgmanager(RHCS)
    - coresync_pacemaker


<Valine />