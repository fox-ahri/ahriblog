---
title: Nginx动静分离
sidebarDepth: 3
---

## 本页目录

[[toc]]

## 前置环境

#### 续上上篇文章 [Nginx 反向代理](https://docs.ahriknow.com/nginx/Nginx%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86.html)

```sh
[root@localhost ~]# docker container ls -a
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                  NAMES
73d0688adbd5        nginx               "nginx -g 'daemon of…"   58 minutes ago      Up 58 minutes       0.0.0.0:8002->80/tcp   n8002
eb5ebab8a5b8        nginx               "nginx -g 'daemon of…"   58 minutes ago      Up 58 minutes       0.0.0.0:8001->80/tcp   n8001
65fe8597a21a        nginx               "nginx -g 'daemon of…"   59 minutes ago      Up 34 minutes       0.0.0.0:80->80/tcp     n80
[root@localhost ~]#
```

## 编辑 Nginx 配置文件

```sh
# 删除反向代理配置文件
[root@localhost ~]# rm /tmp/nginx/n80/conf.d/proxy.conf

# 更改默认配置文件
[root@localhost ~]# vim /tmp/nginx/n80/conf.d/default.conf

server {
    listen       80;
    server_name  ahri.com;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    location /images/ {
        root   /usr/share/nginx/html;
        autoindex       on;
    }
}

[root@localhost ~]# docker container restart n80
n80
[root@localhost ~]# tree /tmp/nginx/n80/
/tmp/nginx/n80/
├── conf.d
│   └── default.conf
├── html
│   ├── css
│   │   └── style.css
│   ├── images
│   │   └── bg.jpg
│   ├── index.html
│   └── js
│       └── index.js
└── nginx.conf

5 directories, 6 files
[root@localhost ~]#
```

-   index.html

    ```html
    <!DOCTYPE html>
    <html lang="zh-hans">
        <head>
            <meta charset="UTF-8" />
            <title>动静分离</title>
            <link rel="stylesheet" href="./css/style.css" />
        </head>
        <body>
            <h1 id="h1">0</h1>
            <img src="./images/bg.jpg" alt="Background" />
            <script src="./js/index.js"></script>
        </body>
    </html>
    ```

-   style.css

    ```css
    h1 {
        color: red;
    }

    img {
        width: 300px;
    }
    ```

-   index.js

    ```js
    setInterval(() => {
        document.getElementById('h1').innerText++
    }, 1000)
    ```

    ![separate1.png](./static/separate1.png)
    ![separate2.png](./static/separate2.png)
    ![separate3.png](./static/separate3.png)

<Valine />
