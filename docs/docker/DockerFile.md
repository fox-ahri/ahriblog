---
title: DockerFile
sidebarDepth: 3
---

## 本页目录
[[toc]]
::: tip
#### 非 root 用户 请添加 sudo
:::

## DockerFile 命令
### 基础命令
```yaml
Syntax:
    FROM: # 基础镜像
        centos:7.7.1908
        centos@8f2c78ca3141
    MAINTAINER: # 维护者信息
        ahri ahriknow@gmail.com
    WORKDIR: # 构建镜像的工作目录，不存在自动创建
        /usr/local
        workdir # 最终工作目录是 /usr/local/workdir
    RUN: # 创建镜像时执行指令
        yum update -y && yum install -y redis
        ["yum", "install", "-y", "nginx"]
    COPY: # 复制主机文件到镜像内(目的路径不存在会自动创建)
        file.txt /opt/files  # 源文件必须和 dockerfile 同目录
                             # 目标目录必须绝对路径
    ADD: # 复制主机文件到镜像内(目的路径不存在会自动创建)
        file.tar.gz /opt/files  # 源文件必须和 dockerfile 同目录
                                # 目标目录必须绝对路径
                                # 会自动解压提取
    EXPOSE: # 暴露端口，机端口映射时，会自动随机映射 EXPOSE 的端口
        80
    ENV: # 添加环境变量
        PATH /usr/local/nginx/sbin:$PATH
    USER: 指定该镜像的执行户去
        ahri
    VOLUME: # 向容器添加数据卷
        /opt/data /opt/data
    CMD: # 容器启动时执行指令, 会被创建容器的指令覆盖
        ['/usr/sbin/sshd', '-D']
    ENTRYPOINT:  # 容器启动时执行指令, 不会被覆盖
        ['/usr/sbin/sshd', '-D']
```

### 构建 nginx 镜像
```dockerfile
FROM centos:7.7.1908

# 将 nginx 包导入 /usr/local/src 并解压
ADD nginx-1.17.7.tar.gz /usr/local/src

# 安装 工具、依赖
RUN yum install -y gcc gcc-c++ glibc make autoconf openssl openssl-devel 
RUN yum install -y libxslt-devel -y gd gd-devel GeoIP GeoIP-devel pcre pcre-devel

# 创建用户
RUN useradd -M -s /sbin/nologin nginx

# 进入 nginx 目录
WORKDIR /usr/local/src/nginx-1.17.7

# 编译 安装 nginx
RUN ./configure --user=nginx --group=nginx --prefix=/usr/local/nginx --with-file-aio --with-http_ssl_module --with-http_realip_module --with-http_addition_module --with-http_xslt_module --with-http_image_filter_module --with-http_geoip_module --with-http_sub_module --with-http_dav_module --with-http_flv_module --with-http_mp4_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_auth_request_module --with-http_random_index_module --with-http_secure_link_module --with-http_degradation_module --with-http_stub_status_module && make && make install

# 映射 80 端口。
EXPOSE 80

# 添加 环境变量
ENV PATH /usr/local/nginx/sbin:$PATH

# 当定义了 ENTRYPOINT 以后，CMD 只能够作为参数进行传递
ENTRYPOINT ["nginx"]

# 在容器执行：nginx -g "daemon off;"
CMD ["-g","daemon off;"]
```

```sh
[root@localhost dockerfile]# tree .
.
├── Dockerfile
└── nginx-1.17.7.tar.gz

0 directories, 2 files
[root@localhost dockerfile]# docker image build -t "ahri/my_nginx:1.0" ./
......
Successfully built 10a24d50e67d
Successfully tagged ahri/my_nginx:1.0
[root@localhost dockerfile]# docker image ls
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
ahri/my_nginx       1.0                 10a24d50e67d        23 seconds ago      592MB
nginx               latest              231d40e811cd        5 weeks ago         126MB
centos              7.7.1908            08d05d1d5859        6 weeks ago         204MB
[root@localhost dockerfile]# docker container ls -a
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                      PORTS               NAMES
957361b07fa4        08d05d1d5859        "/bin/sh -c 'rpm -Uv…"   23 minutes ago      Exited (1) 21 minutes ago                       sharp_germain
d04897602d7d        nginx               "nginx -g 'daemon of…"   45 minutes ago      Up 40 minutes               80/tcp              practical_fermat
[root@localhost dockerfile]# docker run -d ahri/my_nginx:1.0
9df625f2057b54fe5881637665d872def47655621d6a4599fe120a07e38514a4
[root@localhost dockerfile]# docker ps -a
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
9df625f2057b        ahri/my_nginx:1.0   "nginx -g 'daemon of…"   5 seconds ago       Up 4 seconds        80/tcp              determined_tereshkova
[root@localhost dockerfile]# docker container inspect 9df625f2057b | grep IPAddress
            "SecondaryIPAddresses": null,
            "IPAddress": "172.17.0.2",
                    "IPAddress": "172.17.0.2",
[root@localhost dockerfile]# curl 172.17.0.2
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
<style>
    body {
        width: 35em;
        margin: 0 auto;
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
</style>
</head>
<body>
<h1>Welcome to nginx!</h1>
<p>If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.</p>

<p>For online documentation and support please refer to
<a href="http://nginx.org/">nginx.org</a>.<br/>
Commercial support is available at
<a href="http://nginx.com/">nginx.com</a>.</p>

<p><em>Thank you for using nginx.</em></p>
</body>
</html>
[root@localhost dockerfile]#

```

<Valine />