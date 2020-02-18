---
title: Docker镜像制作
sidebarDepth: 3
---

## 本页目录
[[toc]]
::: tip
#### 非 root 用户 请添加 sudo
:::

## 制作 CentOS6.9 镜像
### sshd 服务
```sh
[root@localhost ~]# docker run -it centos:6.9 /bin/bash
Unable to find image 'centos:6.9' locally
6.9: Pulling from library/centos
831490506c47: Pull complete
Digest: sha256:6fff0a9edc920968351eb357c5b84016000fec6956e6d745f695e5a34f18ecd2
Status: Downloaded newer image for centos:6.9
[root@b3ca4c2e196c /]#
# 可以更新 yum update -y
# ctrl + p + q
[root@localhost ~]# docker containwe ls -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
b3ca4c2e196c        centos:6.9          "/bin/bash"         1 minutes ago       Up 1 minutes                            determined_herschel
[root@localhost ~]#
```
> 安装启动 `sshd` 服务, 创建 root 密码
```sh
[root@localhost ~]# docker container attach b3ca4c2e196c
[root@b3ca4c2e196c /]# yum install -y openssh-server
......
Dependency Updated:
  libblkid.x86_64 0:2.17.2-12.28.el6_9.2                                          libuuid.x86_64 0:2.17.2-12.28.el6_9.2

Complete!
[root@b3ca4c2e196c /]# /etc/init.d/sshd start
Generating SSH2 RSA host key:                              [  OK  ]
Generating SSH1 RSA host key:                              [  OK  ]
Generating SSH2 DSA host key:                              [  OK  ]
Starting sshd:                                             [  OK  ]
[root@b3ca4c2e196c /]# passwd
Changing password for user root.
New password: # 123456
BAD PASSWORD: it is too simplistic/systematic
BAD PASSWORD: is too simple
Retype new password: # 123456
passwd: all authentication tokens updated successfully.
[root@b3ca4c2e196c /]#
# ctrl + p + q
[root@localhost ~]#
```
> ssh 连接
```sh
[root@localhost ~]# docker container inspect b3ca4c2e196c | grep IPAddress
            "SecondaryIPAddresses": null,
            "IPAddress": "172.17.0.3",
                    "IPAddress": "172.17.0.3",
[root@localhost ~]# ssh root@172.17.0.3
The authenticity of host '172.17.0.3 (172.17.0.3)' can't be established.
RSA key fingerprint is SHA256:+IJz6k1mW301Rj92bE6GdbNEIYi8tyUnIHuUKXEPTP8.
RSA key fingerprint is MD5:c4:1b:06:01:8c:ba:5a:76:e9:17:e1:d2:c3:c0:40:32.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '172.17.0.3' (RSA) to the list of known hosts.
root@172.17.0.3's password: # 123456
[root@b3ca4c2e196c ~]# hostname
b3ca4c2e196c
[root@b3ca4c2e196c ~]# exit
logout
Connection to 172.17.0.3 closed.
[root@localhost ~]#
```

> 基于该容器制作镜像
```sh
[root@localhost ~]# docker commit b3ca4c2e196c ahri/centos6.9_sshd:v1
sha256:99a14fc8b15f8ad4bde4c82003add34bbd6f08f666d7b982499bef026aab4f95
[root@localhost ~]# docker image ls
REPOSITORY            TAG                 IMAGE ID            CREATED             SIZE
ahri/centos6.9_sshd   v1                  99a14fc8b15f        8 seconds ago       326MB
nginx                 latest              231d40e811cd        4 weeks ago         126MB
centos                latest              0f3e07c0138f        2 months ago        220MB
centos                6.9                 2199b8eb8390        9 months ago        195MB
[root@localhost ~]#
```

> 基于新镜像创建新的容器并 ssh 连接
```sh
[root@localhost ~]# docker container run -d --name my-sshd ahri/centos6.9_sshd:v1 /usr/sbin/sshd -D
4bb884dbfc6efbd1a0e8bc167d574cbde10353be3d81c9460e33f0c9e1920a0c
[root@localhost ~]# docker container ls -a
CONTAINER ID        IMAGE                    COMMAND               CREATED             STATUS              PORTS               NAMES
4bb884dbfc6e        ahri/centos6.9_sshd:v1   "/usr/sbin/sshd -D"   10 seconds ago      Up 8 seconds                            my-sshd
b3ca4c2e196c        centos:6.9               "/bin/bash"           39 minutes ago      Up 39 minutes                           determined_herschel
[root@localhost ~]# docker container inspect 4bb884dbfc6e | grep IPAddress
            "SecondaryIPAddresses": null,
            "IPAddress": "172.17.0.2",
                    "IPAddress": "172.17.0.2",
[root@localhost ~]# ssh root@172.17.0.2
The authenticity of host '172.17.0.2 (172.17.0.2)' can't be established.
RSA key fingerprint is SHA256:+IJz6k1mW301Rj92bE6GdbNEIYi8tyUnIHuUKXEPTP8.
RSA key fingerprint is MD5:c4:1b:06:01:8c:ba:5a:76:e9:17:e1:d2:c3:c0:40:32.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '172.17.0.2' (RSA) to the list of known hosts.
root@172.17.0.2's password: # 123456
Last login: Fri Dec 27 10:26:18 2019 from 172.17.0.1
[root@4bb884dbfc6e ~]# hostname
4bb884dbfc6e
[root@4bb884dbfc6e ~]# exit
logout
Connection to 172.17.0.2 closed.
[root@localhost ~]#
```

## 制作 CentOS7.7.1908 镜像
### sshd 服务
```sh
[root@localhost ~]# docker run -it centos:7.7.1908 /bin/bash
Unable to find image 'centos:7.7.1908' locally
7.7.1908: Pulling from library/centos
f34b00c7da20: Pull complete
Digest: sha256:50752af5182c6cd5518e3e91d48f7ff0cba93d5d760a67ac140e2d63c4dd9efc
Status: Downloaded newer image for centos:7.7.1908
[root@7526cbac7019 /]#
# ctrl + p + q
[root@localhost ~]# docker container ls -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
7526cbac7019        centos:7.7.1908     "/bin/bash"         20 seconds ago      Up 19 seconds                           serene_solomon
[root@localhost ~]#
```
> 安装启动 `sshd` 服务, 创建 root 密码
```sh
[root@localhost ~]# docker container attach 7526cbac7019
[root@7526cbac7019 /]# yum install -y openssh-server
......
Installed:
  openssh-server.x86_64 0:7.4p1-21.el7

Dependency Installed:
  fipscheck.x86_64 0:1.4.1-6.el7    fipscheck-lib.x86_64 0:1.4.1-6.el7    openssh.x86_64 0:7.4p1-21.el7    tcp_wrappers-libs.x86_64 0:7.6-77.el7

Complete!
[root@7526cbac7019 /]# mkdir -p /var/run/sshd
[root@7526cbac7019 /]# echo 'UseDNS no' >> /etc/ssh/sshd_config
[root@7526cbac7019 /]# sed -i -e '/pam_loginuid.so/d' /etc/pam.d/sshd
[root@7526cbac7019 /]# echo 'root:123456' | chpasswd
[root@7526cbac7019 /]# /usr/bin/ssh-keygen -A
ssh-keygen: generating new host keys: RSA1 RSA DSA ECDSA ED25519
[root@7526cbac7019 /]#
# ctrl + p + q
[root@localhost ~]#
```

> 基于该容器制作镜像
```sh
[root@localhost ~]# docker commit 7526cbac7019 ahri/centos7.7.1908_sshd:v1
sha256:98ceb2ad80caa2a995de0dc552081b2a3a86075c73a8d6fccf70ffd69f6f368a
[root@localhost ~]# docker image ls
REPOSITORY                 TAG                 IMAGE ID            CREATED             SIZE
ahri/centos7.7.1908_sshd   v1                  98ceb2ad80ca        5 seconds ago       307MB
ahri/centos6.9_sshd        v1                  99a14fc8b15f        20 hours ago        326MB
nginx                      latest              231d40e811cd        5 weeks ago         126MB
centos                     7.7.1908            08d05d1d5859        6 weeks ago         204MB
centos                     latest              0f3e07c0138f        2 months ago        220MB
centos                     6.9                 2199b8eb8390        9 months ago        195MB
[root@localhost ~]#
```

> 基于新镜像创建新的容器并 ssh 连接
```sh
[root@localhost ~]# docker container run -d --name my-sshd ahri/centos7.7.1908_sshd:v1 /usr/sbin/sshd -D
884b67191506309a67bf3e711b384984ba13b9eee66af05e6df26e593acde614
[root@localhost ~]# docker container ls -a
CONTAINER ID        IMAGE                         COMMAND               CREATED             STATUS              PORTS               NAMES
884b67191506        ahri/centos7.7.1908_sshd:v1   "/usr/sbin/sshd -D"   8 seconds ago       Up 7 seconds                            my-sshd
7526cbac7019        centos:7.7.1908               "/bin/bash"           38 minutes ago      Up 38 minutes                           serene_solomon
[root@localhost ~]# docker container inspect 884b67191506 | grep IPAddress
            "SecondaryIPAddresses": null,
            "IPAddress": "172.17.0.3",
                    "IPAddress": "172.17.0.3",
[root@localhost ~]# ssh root@172.17.0.3
The authenticity of host '172.17.0.3 (172.17.0.3)' can't be established.
ECDSA key fingerprint is SHA256:V+23BSRWuYqWhiMIFTrNiEh9zp+i08b15b16GVLaicQ.
ECDSA key fingerprint is MD5:e5:ae:be:8d:ee:d4:10:16:69:81:24:4b:3e:15:5c:cf.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '172.17.0.3' (ECDSA) to the list of known hosts.
root@172.17.0.3's password:
[root@884b67191506 ~]# hostname
884b67191506
[root@884b67191506 ~]# exit
logout
Connection to 172.17.0.3 closed.
[root@localhost ~]#
```

<Valine />