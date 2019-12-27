---
title: Docker数据卷
sidebarDepth: 3
---

## 本页目录
[[toc]]
::: tip
#### 非 root 用户 请添加 sudo
:::

## 什么是数据卷
数据卷就是数据(一个文件或者文件夹)。

Docker的理念之一是将应用与其运行的环境打包，docker容器的生命周期是与其运行的程序一致的，而我们对数据的要求是持久化，docker容器之间也需要有共享数据的渠道。

数据卷是特殊的目录，可以绕过联合文件系统，为一个或多个容器提供访问。数据卷设计的目的是数据的持久化，是完全独立于容器的生命周期，不会在容器删除的同时删除其挂载的数据卷，也不会存在类似垃圾收集机制，对容器引用的数据卷进行处理。

## 数据卷示例
### 拉取 nginx 镜像
```sh
[root@localhost ~]# docker pull nginx
Using default tag: latest
latest: Pulling from library/nginx
000eee12ec04: Pull complete
eb22865337de: Pull complete
bee5d581ef8b: Pull complete
Digest: sha256:50cf965a6e08ec5784009d0fccb380fc479826b6e0e65684d9879170a9df8566
Status: Downloaded newer image for nginx:latest
docker.io/library/nginx:latest
[root@localhost ~]# docker image ls
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
nginx               latest              231d40e811cd        4 weeks ago         126MB
centos              latest              0f3e07c0138f        2 months ago        220MB
[root@localhost ~]# pwd
/root
[root@localhost ~]# ls
anaconda-ks.cfg
[root@localhost ~]#  yum install -y tree
......
Installed:
  tree.x86_64 0:1.6.0-10.el7

Complete!
[root@localhost ~]# tree .
.
└── anaconda-ks.cfg

0 directories, 1 file
[root@localhost ~]#
```

### 启动容器时挂载数据卷
**将本机 `/root/web` 文件夹挂载到 nginx 容器的 `/usr/share/nginx/html`** (这两个文件夹会自动创建)

`docker run -d --name nginx1 -p 8000:80 -v /root/web/:/usr/share/nginx/html nginx`
```sh
[root@localhost ~]# mkdir ./web
[root@localhost ~]# echo "<h1>hello, world</h1>" >> ./web/index.html
[root@localhost ~]# tree .
.
├── anaconda-ks.cfg
└── web
    └── index.html

1 directory, 2 files
[root@localhost ~]# cat ./web/index.html
<h1>hello, world</h1>
[root@localhost ~]# docker run -d --name nginx1 -p 8000:80 -v /root/web/:/usr/share/nginx/html nginx
8a96393b6502fab1eb8a2115b21cb16d50b34d70e752f235e12b1cb89eb3420f
[root@localhost ~]# docker container ls
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                  NAMES
8a96393b6502        nginx               "nginx -g 'daemon of…"   45 seconds ago      Up 44 seconds       0.0.0.0:8000->80/tcp   nginx1 
[root@localhost ~]#
[root@localhost ~]#
[root@localhost ~]#
[root@localhost ~]#  docker container exec -t nginx1 ls -l /usr/share/nginx/html
total 4
-rw-r--r--. 1 root root 22 Dec 27 08:26 index.html
[root@localhost ~]# docker container exec -t nginx1 cat /usr/share/nginx/html/index.html
<h1>hello, world</h1>
[root@localhost ~]# curl localhost:8000
<h1>hello, world</h1>
[root@localhost ~]# docker container inspect nginx1 | grep IPAddress
            "SecondaryIPAddresses": null,
            "IPAddress": "172.17.0.2",
                    "IPAddress": "172.17.0.2",
[root@localhost ~]# curl 172.17.0.2
<h1>hello, world</h1>
[root@localhost ~]# ifconfig
docker0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
......

ens33: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 10.10.7.105  netmask 255.255.255.0  broadcast 10.10.7.255
        ......

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
......

vethc591871: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
......

[root@localhost ~]# echo "<h1>hello, ahri</h1>" >> /root/web/index.html
[root@localhost ~]# docker container exec -t nginx1 cat /usr/share/nginx/html/index.html
<h1>hello, world</h1>
<h1>hello, ahri</h1>
[root@localhost ~]# curl 127.0.0.1:8000
<h1>hello, world</h1>
<h1>hello, ahri</h1>
[root@localhost ~]# 
```
![访问](./static/4.png)

### 查看容器的数据卷
```sh
[root@localhost ~]# docker container inspect nginx1 | grep -A 9 "Mounts"
        "Mounts": [
            {
                "Type": "bind",
                "Source": "/root/web",
                "Destination": "/usr/share/nginx/html",
                "Mode": "",
                "RW": true,
                "Propagation": "rprivate"
            }
        ],
[root@localhost ~]#
```

## 使用数据卷容器
在集中化管理平台中，大批量的容器都需要挂载相同的多个数据卷时，采用数据卷容器进行统一管理
#### 创建测试目录和文件
```sh
[root@localhost volume]# pwd
/root
[root@localhost ~]# mkdir volume && cd volume
[root@localhost volume]# tree .
.

0 directories, 0 files
[root@localhost volume]# mkdir a
[root@localhost volume]# mkdir b
[root@localhost volume]# touch a/a.txt
[root@localhost volume]# touch b/b.txt
[root@localhost volume]# tree .
.
├── a
│   └── a.txt
└── b
    └── b.txt

2 directories, 2 files
[root@localhost volume]#
```

#### 创建数据卷容器
```sh
[root@localhost volume]# docker run --name volume -v /root/volume/a:/opt/a -v /root/volume/b:/opt/b -ti centos /bin/bash
[root@1cd6448d12fc /]# ls -l /opt/
total 0
drwxr-xr-x. 2 root root 19 Dec 27 09:02 a
drwxr-xr-x. 2 root root 19 Dec 27 09:02 b
[root@1cd6448d12fc /]#
# ctrl + p + q
[root@localhost volume]# docker run --name app1 --volumes-from volume -ti centos /bin/bash
[root@4880d56374d3 /]# ls -l /opt/
total 0
drwxr-xr-x. 2 root root 19 Dec 27 09:02 a
drwxr-xr-x. 2 root root 19 Dec 27 09:02 b
[root@4880d56374d3 /]# cat /opt/a/a.txt
[root@4880d56374d3 /]#
# ctrl + p + q
[root@localhost volume]# docker container ls -a
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                  NAMES
4880d56374d3        centos              "/bin/bash"              3 minutes ago       Up 3 minutes                               app1
1cd6448d12fc        centos              "/bin/bash"              6 minutes ago       Up 6 minutes                               volume
8a96393b6502        nginx               "nginx -g 'daemon of…"   50 minutes ago      Up 50 minutes       0.0.0.0:8000->80/tcp   nginx1
[root@localhost volume]# echo "text to a" >> ./a/a.txt
[root@localhost volume]# docker container attach app1
[root@4880d56374d3 /]# cat /opt/a/a.txt
text to a
[root@4880d56374d3 /]#
```


<Valine />