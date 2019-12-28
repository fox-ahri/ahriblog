---
title: 简单使用Docker
sidebarDepth: 3
---

## 本页目录
[[toc]]
::: tip
#### 非 root 用户 请添加 sudo
:::

## 创建 centos 容器
```sh
[root@localhost ~]# docker run -ti centos /bin/bash
[root@51bd462d9ce3 /]#
# ctrl + p + q
[root@localhost ~]#
```

## 创建本地 centos yum 镜像源
```sh
[root@localhost ~]# ll
total 4554756
-rw-------. 1 root root       1410 Dec 25 13:29 anaconda-ks.cfg
-rw-r--r--. 1 root root 4664066048 Dec 27 04:22 CentOS-7-x86_64-DVD-1908.iso
[root@localhost ~]# mkdir -p /var/ftp/centos7
[root@localhost ~]# mount -o loop /root/CentOS-7-x86_64-DVD-1908.iso /var/ftp/centos7
mount: /dev/loop0 is write-protected, mounting read-only
[root@localhost ~]#

```


<Valine />