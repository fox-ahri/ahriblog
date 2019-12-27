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
[root@localhost ~]#
```


<Valine />