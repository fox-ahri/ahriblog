---
title: CentOS7安装
---

## 本页目录
[[toc]]

## 官方文档
[Docker 文档](https://docs.docker.com/)

[CentOS7 安装 Docker 文档](https://docs.docker.com/install/linux/docker-ce/centos/)


## 安装 Docker-CE（社区版 免费）
::: tip
### 非 root 用户 请添加 sudo
:::

### 卸载老版本的 Docker（未安装过忽略）
```sh
yum remove docker \
            docker-client \
            docker-client-latest \
            docker-common \
            docker-latest \
            docker-latest-logrotate \
            docker-logrotate \
            docker-engine
```

### 安装 工具 和 依赖
```sh
yum install -y yum-utils \
                device-mapper-persistent-data \
                lvm2
```
### 添加官方源
```sh
yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

### 安装 Docker-CE 版引擎
```sh
yum install -y docker-ce
```

### 管理 服务
```sh
systemctl start docker # 启动
systemctl restart docker # 重启
systemctl stop docker # 停止
systemctl enable docker # 设置开机启动
systemctl disable docker # 取消开机启动
```

### 查看信息
```sh
[root@localhost ~]# docker -v
Docker version 19.03.5, build 633a0ea

[root@localhost ~]# docker version
Client: Docker Engine - Community
 Version:           19.03.5
 API version:       1.40
 Go version:        go1.12.12
 Git commit:        633a0ea
 Built:             Wed Nov 13 07:25:41 2019
 OS/Arch:           linux/amd64
 Experimental:      false

Server: Docker Engine - Community
 Engine:
  Version:          19.03.5
  API version:      1.40 (minimum version 1.12)
  Go version:       go1.12.12
  Git commit:       633a0ea
  Built:            Wed Nov 13 07:24:18 2019
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.2.10
  GitCommit:        b34a5c8af56e510852c35414db4c1f4fa6172339
 runc:
  Version:          1.0.0-rc8+dev
  GitCommit:        3e425f80a8c931f88e6d94a8c831b9d5aa481657
 docker-init:
  Version:          0.18.0
  GitCommit:        fec3683

[root@localhost ~]# docker info
Client:
 Debug Mode: false

Server:
 Containers: 0
  Running: 0
  Paused: 0
  Stopped: 0
 Images: 0
 Server Version: 19.03.5
 Storage Driver: overlay2
  Backing Filesystem: xfs
  Supports d_type: true
  Native Overlay Diff: true
 Logging Driver: json-file
 Cgroup Driver: cgroupfs
 Plugins:
  Volume: local
  Network: bridge host ipvlan macvlan null overlay
  Log: awslogs fluentd gcplogs gelf journald json-file local logentries splunk syslog
 Swarm: inactive
 Runtimes: runc
 Default Runtime: runc
 Init Binary: docker-init
 containerd version: b34a5c8af56e510852c35414db4c1f4fa6172339
 runc version: 3e425f80a8c931f88e6d94a8c831b9d5aa481657
 init version: fec3683
 Security Options:
  seccomp
   Profile: default
 Kernel Version: 3.10.0-1062.el7.x86_64
 Operating System: CentOS Linux 7 (Core)
 OSType: linux
 Architecture: x86_64
 CPUs: 1
 Total Memory: 972.4MiB
 Name: localhost.localdomain
 ID: 6SWH:DBLE:DVNT:3VRU:JDQA:2CR3:2FOB:JQOY:5B3I:YZ6T:GT42:XAKG
 Docker Root Dir: /var/lib/docker
 Debug Mode: false
 Registry: https://index.docker.io/v1/
 Labels:
 Experimental: false
 Insecure Registries:
  127.0.0.0/8
 Live Restore Enabled: false

[root@localhost ~]#
```

### 永远的 `hello, world`
```sh
[root@localhost ~]# docker run hello-world
Unable to find image 'hello-world:latest' locally # 本地没有 hello-world:latest 镜像
latest: Pulling from library/hello-world # 从仓库拉取镜像 (默认最新 latest)
1b930d010525: Pull complete # 拉取完成
Digest: sha256:4fe721ccc2e8dc7362278a29dc660d833570ec2682f4e4194f4ee23e415e1064 # sha256
Status: Downloaded newer image for hello-world:latest # 操作状态

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/

[root@localhost ~]#
```

### 根据情况更换 Docker 仓库地址
#### 设置阿里云加速
到 [阿里云](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors) 注册账号获取加速地址

修改daemon配置文件/etc/docker/daemon.json来使用加速器
```sh
mkdir -p /etc/docker
tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["加速地址"]
}
EOF
systemctl daemon-reload
systemctl restart docker
```
##### 或
```sh
yum install -y vim
mkdir -p /etc/docker
vim /etc/docker/daemon.json
# 按 i 编辑，输入 ↓
{
  "registry-mirrors": ["加速地址"]
}
# 输入 :wq 保存退出
systemctl daemon-reload
systemctl restart docker
```

#### 查看加速地址
```sh
docker info
```

#### 其他加速地址
- docker官网中国区镜像\
https://registry.docker-cn.com
- 网易163 docker镜像\
http://hub-mirror.c.163.com
- USTC镜像加速\
https://docker.mirrors.ustc.edu.cn
- daocloud镜像 需注册\
http://{your_id}.m.daocloud.io



<Valine />