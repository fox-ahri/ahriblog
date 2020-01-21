---
title: Docker应用
sidebarDepth: 3
---

## 本页目录

[[toc]]
::: tip

#### 非 root 用户 请添加 sudo

:::

## Docker 搭建 shadowsocket

#### 拉取镜像

```sh
docker pull oddrationale/docker-shadowsocks
```

#### 启动容器

```sh
docker container run --name sstp -d -p 10000:10000 oddrationale/docker-shadowsocks -s 0.0.0.0 -p 10000 -k password -m aes-256-cfb
```

## Docker 搭建 l2tp

#### 拉取镜像

```sh
docker pull fcojean/l2tp-ipsec-vpn-server
```

#### 创建配置文件

```sh
vim vpn.env

VPN_IPSEC_PSK=PSK
VPN_USER_CREDENTIAL_LIST=[{"login":"user1","password":"pass1"},{"login":"user2","password":"pass2"}]
```

#### 加载 IPsec NETKEY 内核模块

```sh
sudo modprobe af_key
```

#### 启动容器

```sh
docker container run \
    --name l2tp \
    --env-file ./vpn.env \
    -p 500:500/udp \
    -p 4500:4500/udp \
    -v /lib/modules:/lib/modules:ro \
    -d --privileged \
    fcojean/l2tp-ipsec-vpn-server
```

<Valine />
