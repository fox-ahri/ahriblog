---
title: Nginx配置文件
sidebarDepth: 3
---

## 本页目录

[[toc]]

## Nginx 配置文件

#### 配置文件位置

```sh
[root@localhost conf]# cd /usr/local/nginx/conf/
[root@localhost conf]# ll
total 68
-rw-r--r--. 1 root root 1077 Jan  8 02:44 fastcgi.conf
-rw-r--r--. 1 root root 1077 Jan  8 02:44 fastcgi.conf.default
-rw-r--r--. 1 root root 1007 Jan  8 02:44 fastcgi_params
-rw-r--r--. 1 root root 1007 Jan  8 02:44 fastcgi_params.default
-rw-r--r--. 1 root root 2837 Jan  8 02:44 koi-utf
-rw-r--r--. 1 root root 2223 Jan  8 02:44 koi-win
-rw-r--r--. 1 root root 5231 Jan  8 02:44 mime.types
-rw-r--r--. 1 root root 5231 Jan  8 02:44 mime.types.default
-rw-r--r--. 1 root root 2656 Jan  8 02:44 nginx.conf
-rw-r--r--. 1 root root 2656 Jan  8 02:44 nginx.conf.default
-rw-r--r--. 1 root root  636 Jan  8 02:44 scgi_params
-rw-r--r--. 1 root root  636 Jan  8 02:44 scgi_params.default
-rw-r--r--. 1 root root  664 Jan  8 02:44 uwsgi_params
-rw-r--r--. 1 root root  664 Jan  8 02:44 uwsgi_params.default
-rw-r--r--. 1 root root 3610 Jan  8 02:44 win-utf
[root@localhost conf]# cat nginx.conf
```

#### 默认配置文件

-   第一部分 - 全局块

    设置影响 nginx 服务器整体运行的配置指令，主要包括配置运行 nginx 服务器的用户(组)，工作进程数，进程 PID 的路径，日志的类型和路径，配置文件的引入等

    ```sh
    #user  nobody;
    worker_processes  1;

    #error_log  logs/error.log;
    #error_log  logs/error.log  notice;
    #error_log  logs/error.log  info;

    #pid        logs/nginx.pid;
    ```

-   第二部分 - events 块

    配置 nginx 服务器与用户网络连接的属性

    ```sh
    events {
        worker_connections  1024; # 最大连接数
    }
    ```

-   第三部分 - http 块

    -   http 全局块

        ```sh
        include       mime.types;
        default_type  application/octet-stream;

        #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
        #                  '$status $body_bytes_sent "$http_referer" '
        #                  '"$http_user_agent" "$http_x_forwarded_for"';

        #access_log  logs/access.log  main;

        sendfile        on;
        #tcp_nopush     on;

        #keepalive_timeout  0;
        keepalive_timeout  65;

        #gzip  on;
        ```

    -   server 块

        ```sh
        server {
            listen       80; # 端口号
            server_name  localhost; # 主机名

            #charset koi8-r;

            #access_log  logs/host.access.log  main;

            location / {
                root   html;
                index  index.html index.htm;
            }

            #error_page  404              /404.html;

            # redirect server error pages to the static page /50x.html
            #
            error_page   500 502 503 504  /50x.html;
            location = /50x.html {
                root   html;
            }

            # proxy the PHP scripts to Apache listening on 127.0.0.1:80
            #
            #location ~ \.php$ {
            #    proxy_pass   http://127.0.0.1;
            #}

            # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
            #
            #location ~ \.php$ {
            #    root           html;
            #    fastcgi_pass   127.0.0.1:9000;
            #    fastcgi_index  index.php;
            #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
            #    include        fastcgi_params;
            #}

            # deny access to .htaccess files, if Apache's document root
            # concurs with nginx's one
            #
            #location ~ /\.ht {
            #    deny  all;
            #}
        }

        # another virtual host using mix of IP-, name-, and port-based configuration
        #
        #server {
        #    listen       8000;
        #    listen       somename:8080;
        #    server_name  somename  alias  another.alias;

        #    location / {
        #        root   html;
        #        index  index.html index.htm;
        #    }
        #}


        # HTTPS server
        #
        #server {
        #    listen       443 ssl;
        #    server_name  localhost;

        #    ssl_certificate      cert.pem;
        #    ssl_certificate_key  cert.key;

        #    ssl_session_cache    shared:SSL:1m;
        #    ssl_session_timeout  5m;

        #    ssl_ciphers  HIGH:!aNULL:!MD5;
        #    ssl_prefer_server_ciphers  on;

        #    location / {
        #        root   html;
        #        index  index.html index.htm;
        #    }
        #}
        ```

<Valine />
