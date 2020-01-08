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

        <a href="#分布式锁应用场景">↓↓ 分布式锁应用场景</a>

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

-   常用操作

| 操作                         | 作用                                               |
| ---------------------------- | -------------------------------------------------- |
| SADD key member [member ...] | 往集合中存入元素，元素存在则忽略，key 不存在则新建 |
| SREM key member [member ...] | 从集合 key 中删除元素                              |
| SMEMBERS key                 | 获取集合 key 中所有元素                            |
| SCARD key                    | 获取集合 key 中元素个数                            |
| SISMEMBER key member         | 判断 member 元素是否存在于集合 key 中              |
| SRANDMEMBER key count        | 从集合 key 中复制出 count 个元素                   |
| SPOP key count               | 从集合 key 中取出 count 个元素                     |

-   运算符操作

| 操作                                  | 作用                                  |
| ------------------------------------- | ------------------------------------- |
| SINTER key [key ...]                  | 交集运算                              |
| SINTERSTORE destination key [key ...] | 将交集的结果存入新集合 destination 中 |
| SUNION key [key ...]                  | 并集运算                              |
| SUNIONSTORE destination key [key ...] | 将并集的结果存入新集合 destination 中 |
| SDIFF key [key ...]                   | 差集运算                              |
| SDIFFSTORE destination key [key ...]  | 将差集的结果存入新集合 destination 中 |

-   应用场景

    -   抽奖程序

        ```sh
        # 点击参与抽奖  act:1 一号抽奖  1000 用户id
        SADD act:1 1000
        # 查看参与抽 act:1 奖的所有用户
        SMEMBERS act:1
        # 选取 count 名获奖者
        SRANDMEMBER act:1 count # 单次抽奖
        SPOP act:1 count # 多级抽奖
        ```

    -   点赞、收藏

        ```sh
        # 点赞
        SADD like:msgId userId
        # 取消点赞
        SREM like:msgId userId
        # 查看用户是否点赞
        SISMEMBER like:msgId userId
        # 获取点赞的用户列表
        SMEMBERS like:msgId
        # 获取点赞数
        SCARD like:msgId
        ```

    -   关注

        ```sh
        # A 关注了 abc
        ASet -> { B, C, D }
        # B 关注了 abcd
        BSet -> { A, C, D, E }
        # C 关注了 bcde
        CSet -> { A, B, C, D, E }
        # AB 共同关注
        SINTER ASet BSet -> { C, D }
        # A 关注的 B 是否也关注了 C, D
        SISMEMBER BSet C
        SISMEMBER BSet D
        # A 可能通过 B 认识的人
        SDIFF ASet BSet -> { (A), (B), E }
        ```

## 分布式锁应用场景<a name="分布式锁应用场景"></a>
#### 抢票
```python
import time
import uuid
from threading import Thread

import redis

redis_client = redis.Redis(host="127.0.0.1",
                           port=6379,
                           # password=123,
                           db=10)

#获取锁
# lock_name：锁定名称
# acquire_time: 客户端等待获取锁的时间
# time_out: 锁的超时时间
def acquire_lock(lock_name, acquire_time=10, time_out=10):
    """获取一个分布式锁"""
    identifier = str(uuid.uuid4())
    end = time.time() + acquire_time
    lock = "string:lock:" + lock_name
    while time.time() < end:
        if redis_client.setnx(lock, identifier):
            # 给锁设置超时时间, 防止进程崩溃导致其他进程无法获取锁
            redis_client.expire(lock, time_out)
            return identifier
        elif not redis_client.ttl(lock):
            redis_client.expire(lock, time_out)
        time.sleep(0.001)
    return False

#释放锁
def release_lock(lock_name, identifier):
    """释放一个分布式锁"""
    lock = "string:lock:" + lock_name
    pip = redis_client.pipeline(True)
    while True:
        try:
            pip.watch(lock)
            lock_value = redis_client.get(lock)
            if not lock_value:
                return True

            if lock_value.decode() == identifier:
                pip.multi()
                pip.delete(lock)
                pip.execute()
                return True
            pip.unwatch()
            break
        except redis.excetions.WacthcError:
            pass
    return False

count=10

def seckill(i):
    identifier=acquire_lock('resource')
    print("线程:{}--获得了锁".format(i))
    time.sleep(1)
    global count
    if count<1:
        print("线程:{}--没抢到，票抢完了".format(i))
        return
    count-=1
    print("线程:{}--抢到一张票，还剩{}张票".format(i,count))
    release_lock('resource',identifier)


for i in range(50):
    t = Thread(target=seckill,args=(i,))
    t.start()
```

<Valine />
