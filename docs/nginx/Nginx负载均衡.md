---
title: Nginx负载均衡
sidebarDepth: 3
---

## 本页目录

[[toc]]

## 前置环境

#### 在本地 host 文件添加映射

`10.10.10.100 fox.com`

`10.10.10.100 ahri.com`

#### 启动应用服务

![flask5000.png](./static/flask5000.png)
![flask5001.png](./static/flask5001.png)

## 编辑 Nginx 配置文件

```sh
# 添加 server 块配置
[root@localhost sbin]# vim /usr/local/nginx/conf/nginx.conf

server {
        listen       80;
        server_name  ahri.com;

        location / {
            proxy_pass  http://127.0.0.1:5000;
        }
}

[root@localhost sbin]# /usr/local/nginx/sbin/nginx -s reload
[root@localhost sbin]#
```

![nginx-flask.png](./static/nginx-flask.png)


```sh
# 添加 server 块配置
[root@localhost sbin]# vim /usr/local/nginx/conf/nginx.conf

server {
        listen       80;
        server_name  fox.com;

        location ~ /f5000/ {
            proxy_pass  http://127.0.0.1:5000;
        }

        location ~ /f5001/ {
            proxy_pass  http://127.0.0.1:5001;
        }
}

[root@localhost sbin]# /usr/local/nginx/sbin/nginx -s reload
[root@localhost sbin]#
```

![nginx-flask2.png](./static/nginx-flask2.png)

<Valine />
