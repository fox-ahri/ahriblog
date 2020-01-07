---
title: Redis数据类型及应用场景
sidebarDepth: 3
---

## 本页目录

[[toc]]

## 核心数据类型

![redistype.png](./static/redistype.png)

### String

-   常用操作

| 操作                           | 作用                         |
| ------------------------------ | ---------------------------- |
| SET key value                  | 存入字符串键值对             |
| MSET key value [key value ...] | 批量存入字符串键值对         |
| SETNX key value                | 存入一个不存在的字符串键值对 |
| GET key                        | 读取字符串键值对             |
| MGET key [key ...]             | 批量读取字符串键值对         |
| DEL key [key ...]              | 删除键值对                   |
| EXPIRE key seconds             | 设置 key 过期时间 (秒)       |

-   原子加减

| 操作                 | 作用                            |
| -------------------- | ------------------------------- |
| INCR key             | 将 key 中存储的数字加一         |
| DECR key             | 将 key 中存储的数字减一         |
| INCRBY key increment | 将 key 中存储的数字加 increment |
| DNCRBY key decrement | 将 key 中存储的数字减 decrement |

-   应用场景

    -   单值缓存

        ```sh
        SET key value
        GET key
        ```

    -   对象缓存

        ```sh
        SET key:1 value # json 格式
        MSET key:1:n1 value1 key:2:n1 value2
        MGET key:1:n1 key:2:n1
        ```

    -   分布式锁

        ```sh
        SETNX product:10001 true # 返回 1 获取锁成功，0 失败
        # 执行业务 ...
        DEL product:10001 # 释放锁
        SET product:10001 true ex 10 nx # 防止程序意外终止导致死锁
        ```

    -   计数器

        ```sh
        INCR article:readcount:id1
        GET article:readcount:id1
        ```

    -   分布式系统全局序列号

        ```sh
        INCRBY orderId 1000
        ```

    -   Web 集群 session 共享

### Hash

-   优点

    1. 同类数据归类整合，方便管理
    2. 相比 string 消耗内存与 cpu 更少
    3. 相比 string 更节省空间

-   缺点

    1. 过期功能只能用在 key 上
    2. 集群架构下不适合大规模使用(数据会集中到一个 master)

-   常用操作

| 操作                                    | 作用                                     |
| --------------------------------------- | ---------------------------------------- |
| HSET key field value                    | 存入一个哈希表 key 的键值                |
| HSETNX key field value                  | 存入一个不存在的哈希表 key 的键值        |
| HMSET key field value [field value ...] | 在一个哈希表 key 中存入多个键值          |
| HGET key field                          | 获取哈希表 key 对应的 field 键值         |
| HMGET key field [field ...]             | 批量获取哈希表 key 对应的 field 键值     |
| DEL key field [field ...]               | 删除哈希表 key 中的 field 键值           |
| HLEN key                                | 获取哈希表 key 中 field 的数量           |
| HGETALL key                             | 获取哈希表 key 中多有键值                |
| HINCRBY key field increment             | 哈希表 key 中的 field 键值增加 increment |

-   应用场景

    -   对象缓存

        ```sh
        HMSET user {userId}:name username {userId}:age 18
        HMGET user {userId}:name {userId}:age
        ```

        -   例: 电商购物车
            ```sh
            # 用户id为key
            # 商品id为field
            # 商品数量为value
            HSET cart:1001 10000 1 # 添加商品
            HINCRBY cart:1001 10000 1 # 增加商品
            HLEN cart:1001 # 商品数量
            HDEL cart:1001 10000 # 删除商品
            HGETALL cart:1001 # 获取购物车所有商品
            ```

    -   分布式锁

        ```sh
        SETNX product:10001 true # 返回 1 获取锁成功，0 失败
        # 执行业务 ...
        DEL product:10001 # 释放锁
        SET product:10001 true ex 10 nx # 防止程序意外终止导致死锁
        ```

### List

-   常用操作

| 操作                        | 作用                                                                                      |
| --------------------------- | ----------------------------------------------------------------------------------------- |
| LPUSH key value [value ...] | 将一个或多个 value 插入到 key 列表的表头                                                  |
| RPUSH key value [value ...] | 将一个或多个 value 插入到 key 列表的表尾                                                  |
| LPOP key                    | 移除并返回 key 列表的头元素                                                               |
| RPOP key                    | 移除并返回 key 列表的尾元素                                                               |
| LRANGE key start stop       | 返回列表 key 中指定区间内的元素                                                           |
| BLPOP key [key ...] timeout | 从 key 列表表头弹出一个元素，若列表没有元素，阻塞等待 timeout 秒，timeout 为 0 则一直等待 |
| BLPOP key [key ...] timeout | 从 key 列表表尾弹出一个元素，若列表没有元素，阻塞等待 timeout 秒，timeout 为 0 则一直等待 |

-   应用场景

    -   数据结构

        ```sh
        Stack(栈) = LPUSH + LPOP -> FILO
        Queue(队列) = LPUSH + RPOP -> FIFO
        Blocking MQ(阻塞队列) = LPUSH + BRPOP
        ```

    -   信息流

        -   例: 微博消息、微信公众号消息、美团、滴滴
            ```sh
            # A 发微博 ID 为 10000
            LPUSH msg:userId 10000
            # B 发微博 ID 为 10001
            LPUSH msg:userId 10001
            # 查看最新微博
            LRANGE msg:userId 0 4
            ```

### Set

### ZSet

<Valine />
