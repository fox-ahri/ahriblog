---
title: Docker镜像命令
sidebarDepth: 3
---

## 本页目录
[[toc]]
::: tip
#### 非 root 用户 请添加 sudo
:::

## 镜像命令
### 查找镜像
从 Docker Hub 查找，从加速地址下载 `docker search [OPTIONS] [NAME]`
- --no-trunc 显示完整的镜像描述
- --filter=stars=N 列出收藏数不小于指定数的镜像
- --filter=is-automated=true|false 是否只列出 automated build 类型的镜像
```sh
[root@localhost ~]# docker search --filter=stars=100 centos
# 镜像名                  描述                                             收藏                官方                自动构建
NAME                      DESCRIPTION                                     STARS               OFFICIAL            AUTOMATED
centos                    The official build of CentOS.                   5737                [OK]
ansible/centos7-ansible   Ansible on Centos7                              126                                     [OK]
jdeathe/centos-ssh        OpenSSH / Supervisor / EPEL/IUS/SCL Repos - …   114                                     [OK]
consol/centos-xfce-vnc    Centos container with "headless" VNC session…   101                                     [OK]
[root@localhost ~]#
```

### 下载镜像
默认 TAG 为 latest `docker pull [NAME][:TAG]`
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
[root@localhost ~]#
```

### 上传镜像
待续...

### 查看镜像
显示所有本地镜像 `docker images [OPTIONS]`
- -a 列出本地所有镜像(含中间镜像层)
- -q 只显示 ID
- --digests 显示镜像的摘要信息
- --no-trunc 显示完整的镜像信息
```sh
[root@localhost ~]# docker images # 或 docker image ls
#   仓库源          标签                 镜像 ID             创建时间             大小
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
nginx               latest              231d40e811cd        4 weeks ago         126MB
centos              latest              0f3e07c0138f        2 months ago        220MB
hello-world         latest              fce289e99eb9        11 months ago       1.84kB

[root@localhost ~]# docker images -q
231d40e811cd
0f3e07c0138f
fce289e99eb9
[root@localhost ~]# docker images -a --no-trunc
REPOSITORY          TAG                 IMAGE ID                                                                  CREATED             SIZE
nginx               latest              sha256:231d40e811cd970168fb0c4770f2161aa30b9ba6fe8e68527504df69643aa145   4 weeks ago         126MB
centos              latest              sha256:0f3e07c0138fbe05abcb7a9cc7d63d9bd4c980c3f61fea5efa32e7c4217ef4da   2 months ago        220MB
hello-world         latest              sha256:fce289e99eb9bca977dae136fbe2a82b6b7d4c372474c9235adc1741675f587e   11 months ago       1.84kB
[root@localhost ~]# docker images -a --digests
REPOSITORY          TAG                 DIGEST                                                                    IMAGE ID            CREATED             SIZE
nginx               latest              sha256:50cf965a6e08ec5784009d0fccb380fc479826b6e0e65684d9879170a9df8566   231d40e811cd        4 weeks ago         126MB
centos              latest              sha256:f94c1d992c193b3dc09e297ffd54d8a4f1dc946c37cbeceb26d35ce1647f88d9   0f3e07c0138f        2 months ago        220MB
hello-world         latest              sha256:4fe721ccc2e8dc7362278a29dc660d833570ec2682f4e4194f4ee23e415e1064   fce289e99eb9        11 months ago       1.84kB
[root@localhost ~]#
```

### 删除镜像
默认 TAG 为 latest 
```
docker rmi [OPTIONS] \
[IMAGE_1_NAME|IMAGE_1_ID][:IMAGE_1_TAG] \
[IMAGE_2_NAME|IMAGE_2_ID][:IMAGE_2_TAG]
```
- -f 强制删除

删除所有镜像 `docker rmi $(docker images -qa)`
```sh
[root@localhost ~]# docker rmi hello-world # 或  docker rmi fce289e99eb9
Untagged: hello-world:latest
Untagged: hello-world@sha256:4fe721ccc2e8dc7362278a29dc660d833570ec2682f4e4194f4ee23e415e1064
Deleted: sha256:fce289e99eb9bca977dae136fbe2a82b6b7d4c372474c9235adc1741675f587e
Deleted: sha256:af0b15c8625bb1938f1d7b17081031f649fd14e6b233688eea3c5483994a66a3
[root@localhost ~]#
# -------------------------#
[root@localhost ~]# docker rmi hello-world
Error response from daemon: conflict: unable to remove repository reference "hello-world" (must force) - container 1bf5e11990ae is using its referenced image fce289e99eb9
 # 有容器基于此镜像创建的，添加 -f 参数强制删除 docker rmi -f hello-world
[root@localhost ~]#
```



<Valine />