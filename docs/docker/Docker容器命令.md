---
title: Docker容器命令
sidebarDepth: 3
---

## 本页目录
[[toc]]
::: tip
#### 非 root 用户 请添加 sudo
:::

## 容器命令
### 帮助
```sh
[root@localhost ~]# docker container --help

Usage:  docker container COMMAND

Manage containers

Commands:
  attach      Attach local standard input, output, and error streams to a running container
  commit      Create a new image from a container's changes
  cp          Copy files/folders between a container and the local filesystem
  create      Create a new container
  diff        Inspect changes to files or directories on a container's filesystem
  exec        Run a command in a running container
  export      Export a container's filesystem as a tar archive
  inspect     Display detailed information on one or more containers
  kill        Kill one or more running containers
  logs        Fetch the logs of a container
  ls          List containers
  pause       Pause all processes within one or more containers
  port        List port mappings or a specific mapping for the container
  prune       Remove all stopped containers
  rename      Rename a container
  restart     Restart one or more containers
  rm          Remove one or more containers
  run         Run a command in a new container
  start       Start one or more stopped containers
  stats       Display a live stream of container(s) resource usage statistics
  stop        Stop one or more running containers
  top         Display the running processes of a container
  unpause     Unpause all processes within one or more containers
  update      Update configuration of one or more containers
  wait        Block until one or more containers stop, then print their exit codes

Run 'docker container COMMAND --help' for more information on a command.
[root@localhost ~]#
```

### 首先拉取 centos 镜像
```sh
[root@localhost ~]# docker pull centos
Using default tag: latest
latest: Pulling from library/centos
729ec3a6ada3: Pull complete
Digest: sha256:f94c1d992c193b3dc09e297ffd54d8a4f1dc946c37cbeceb26d35ce1647f88d9
Status: Downloaded newer image for centos:latest
docker.io/library/centos:latest
[root@localhost ~]# docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
centos              latest              0f3e07c0138f        2 months ago        220MB
[root@localhost ~]#
```

### 新建并启动容器
`docker [container] run [OPTIONS] IMAGENAME[:TAG]|IMAGEID [COMMAND] [ARG...]`
- --name="NAME" 为容器指定一个名字
- -d 后台运行容器，并打印容器 ID
- -i 以交互模式启动容器，通常与 `-t` 同时使用
- -t 为容器分配一个终端，通常与 `-i` 同时使用
- -P 随机端口映射
- -p 指定端口映射
    - ip:hostPort:containerPort
    - ip::containerPort
    - hostPort:containerPort
    - containerPort
    
#### 交互模式非守护启动
```sh
[root@localhost ~]# docker run --name my-centos -it centos
[root@80be92c3b0fa /]# ls
bin  dev  etc  home  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
[root@80be92c3b0fa /]# exit # 非后台容器 exit 会关闭容器，ctrl + p + q 可不关闭当前容器退出，-d 启动的不受影响
[root@localhost ~]#
```
#### 守护非交互模式启动 (容器没有前台应用会自动退出)
```sh
[root@localhost ~]# docker container ls -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
[root@localhost ~]# docker run -d centos
ad7b31ca204a7201d8a671eefa3748440f8ad8beb095bfba5ac0db706e415498
[root@localhost ~]# docker container ls -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                     PORTS               NAMES
ad7b31ca204a        centos              "/bin/bash"         7 seconds ago       Exited (0) 6 seconds ago                       musing_allen
[root@localhost ~]# docker rm ad7b31ca204a
ad7b31ca204a
[root@localhost ~]# docker container ls -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
[root@localhost ~]#

[root@localhost ~]# docker container ls -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
[root@localhost ~]# docker run -d centos /bin/sh -c "while true;do echo hello ahri;sleep 2;done"
fa750ca7fd8bb550bc0c860e98d617287b1fef1e00a529e8e049ee34f3754d05
[root@localhost ~]# docker container ls -a
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
fa750ca7fd8b        centos              "/bin/sh -c 'while t…"   4 seconds ago       Up 3 seconds                            reverent_kapitsa
[root@localhost ~]#
```

### 列出容器
`docker container ls [OPTIONS]`  `docker ps [OPTIONS]`
- -a 查看所有容器(否则只查看正在运行的容器)
- -l 查看上一个活动的容器
- -n 查看指定个数的最近活动的容器
- -q 只显示容器编号
```sh
[root@localhost ~]# docker container ls -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                      PORTS               NAMES
f088a82ba445        centos              "/bin/bash"         4 minutes ago       Up 4 minutes                                    containerName
80be92c3b0fa        centos              "/bin/bash"         17 minutes ago      Exited (0) 17 minutes ago                       my-centos
[root@localhost ~]#
```

### 启动容器
`docker start Name|ID`
```sh
[root@localhost ~]# docker start my-centos
my-centos
[root@localhost ~]# docker container ls
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
f088a82ba445        centos              "/bin/bash"         6 minutes ago       Up 6 minutes                            containerName
80be92c3b0fa        centos              "/bin/bash"         19 minutes ago      Up 5 seconds                            my-centos
[root@localhost ~]#
```

### 停止容器
`docker stop Name|ID`
`docker kill Name|ID` 强制停止容器
```sh
[root@localhost ~]# docker stop f088a82ba445
f088a82ba445
[root@localhost ~]# docker container ls -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                     PORTS               NAMES
f088a82ba445        centos              "/bin/bash"         7 minutes ago       Exited (0) 4 seconds ago                       containerName
80be92c3b0fa        centos              "/bin/bash"         20 minutes ago      Up About a minute                              my-centos
[root@localhost ~]#
```

### 重启容器
`docker restart Name|ID`
```sh
[root@localhost ~]# docker container ls
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
80be92c3b0fa        centos              "/bin/bash"         21 minutes ago      Up 3 minutes                            my-centos
[root@localhost ~]# docker restart my-centos
my-centos
[root@localhost ~]# docker container ls
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
80be92c3b0fa        centos              "/bin/bash"         21 minutes ago      Up 2 seconds                            my-centos
[root@localhost ~]#
```

### 删除容器
```
容器停止才能删除
docker [container] rm [OPTIONS] \
[CONTAINER_1_NAME|CONTAINER_1_ID] \
[CONTAINER_2_NAME|CONTAINER_2_ID]
```
- -f 强制删除容器

删除所有容器 `docker rm $(docker container ls -qa)`
```sh
[root@localhost ~]# docker container ls -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                     PORTS               NAMES
f088a82ba445        centos              "/bin/bash"         13 minutes ago      Exited (0) 5 minutes ago                       containerName
80be92c3b0fa        centos              "/bin/bash"         26 minutes ago      Up 4 minutes                                   my-centos
[root@localhost ~]# docker rm 80be92c3b0fa
Error response from daemon: You cannot remove a running container 80be92c3b0fab4396c33f9e10b55a01b550c1317ca7534d3bd1714bc6b10983f. Stop the container before attempting removal or force remove
[root@localhost ~]# docker rm f088a82ba445
f088a82ba445
[root@localhost ~]# docker container ls -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
80be92c3b0fa        centos              "/bin/bash"         26 minutes ago      Up 4 minutes                            my-centos
[root@localhost ~]# docker rm -f 80be92c3b0fa
80be92c3b0fa
[root@localhost ~]# docker container ls -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
[root@localhost ~]#
```

### 查看容器日志
`docker [container] logs [OPTIONS] CONTAINER_NAME|CONTAINER_ID`
- -f 跟踪实时日志
- -t 显示时间戳
- --tail 显示最新的指定行数
```sh
[root@localhost ~]# docker run -d centos /bin/sh -c "while true;do echo hello ahri;sleep 2;done"
16a4191c0ddd72b266fb5459d9bf6305c1fc2eacf9c16679eb2a88e08f7f7861
[root@localhost ~]# 
[root@localhost ~]# docker logs -t --tail 3 16a4191c0ddd
2019-12-26T08:39:35.619506153Z hello ahri
2019-12-26T08:39:37.627557803Z hello ahri
2019-12-26T08:39:39.635105696Z hello ahri
[root@localhost ~]#
```

### 查看容器内进程
`docker [container] top CONTAINER_NAME|CONTAINER_ID`
```sh
[root@localhost ~]# docker run -d centos /bin/sh -c "while true;do echo hello ahri;sleep 2;done"
7bc64e5a42f8334f3c6198c173ae5b4607aa13ef1ccbaa0e8f17fe42c0446d2d
[root@localhost ~]# docker container ls
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
7bc64e5a42f8        centos              "/bin/sh -c 'while t…"   9 seconds ago       Up 8 seconds                            elated_feynman
[root@localhost ~]# docker top 7bc64e5a42f8
UID                 PID                 PPID                C                   STIME               TTY                 TIME                CMD
root                60425               60410               0                   03:42               ?                   00:00:00            /bin/sh -c while true;do echo hello ahri;sleep 2;done
root                60474               60425               0                   03:42               ?                   00:00:00            /usr/bin/coreutils --coreutils-prog-shebang=sleep /usr/bin/sleep 2
[root@localhost ~]#
```

### 查看容器内细节
`docker [container] inspect CONTAINER_NAME|CONTAINER_ID`
```sh
[root@localhost ~]# docker inspect 7bc64e5a42f8
[
    {
        "Id": "7bc64e5a42f8334f3c6198c173ae5b4607aa13ef1ccbaa0e8f17fe42c0446d2d",
        "Created": "2019-12-26T08:42:07.970581409Z",
        "Path": "/bin/sh",
        "Args": [
            "-c",
            "while true;do echo hello ahri;sleep 2;done"
        ],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 60425,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2019-12-26T08:42:08.204384103Z",
            "FinishedAt": "0001-01-01T00:00:00Z"
        },
        "Image": "sha256:0f3e07c0138fbe05abcb7a9cc7d63d9bd4c980c3f61fea5efa32e7c4217ef4da",
        "ResolvConfPath": "/var/lib/docker/containers/7bc64e5a42f8334f3c6198c173ae5b4607aa13ef1ccbaa0e8f17fe42c0446d2d/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/7bc64e5a42f8334f3c6198c173ae5b4607aa13ef1ccbaa0e8f17fe42c0446d2d/hostname",
        "HostsPath": "/var/lib/docker/containers/7bc64e5a42f8334f3c6198c173ae5b4607aa13ef1ccbaa0e8f17fe42c0446d2d/hosts",
        "LogPath": "/var/lib/docker/containers/7bc64e5a42f8334f3c6198c173ae5b4607aa13ef1ccbaa0e8f17fe42c0446d2d/7bc64e5a42f8334f3c6198c173ae5b4607aa13ef1ccbaa0e8f17fe42c0446d2d-json.log",
        "Name": "/elated_feynman",
        "RestartCount": 0,
        "Driver": "overlay2",
        "Platform": "linux",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": null,
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {}
            },
            "NetworkMode": "default",
            "PortBindings": {},
            "RestartPolicy": {
                "Name": "no",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": null,
            "CapAdd": null,
            "CapDrop": null,
            "Capabilities": null,
            "Dns": [],
            "DnsOptions": [],
            "DnsSearch": [],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "private",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "ConsoleSize": [
                0,
                0
            ],
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "NanoCpus": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": [],
            "BlkioDeviceReadBps": null,
            "BlkioDeviceWriteBps": null,
            "BlkioDeviceReadIOps": null,
            "BlkioDeviceWriteIOps": null,
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpuRealtimePeriod": 0,
            "CpuRealtimeRuntime": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": [],
            "DeviceCgroupRules": null,
            "DeviceRequests": null,
            "KernelMemory": 0,
            "KernelMemoryTCP": 0,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": null,
            "OomKillDisable": false,
            "PidsLimit": null,
            "Ulimits": null,
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0,
            "MaskedPaths": [
                "/proc/asound",
                "/proc/acpi",
                "/proc/kcore",
                "/proc/keys",
                "/proc/latency_stats",
                "/proc/timer_list",
                "/proc/timer_stats",
                "/proc/sched_debug",
                "/proc/scsi",
                "/sys/firmware"
            ],
            "ReadonlyPaths": [
                "/proc/bus",
                "/proc/fs",
                "/proc/irq",
                "/proc/sys",
                "/proc/sysrq-trigger"
            ]
        },
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/e0a0a1ad805f8fae7c83b4471fa29db3d94e5009d4b43a09bbe62ef9c78a1afa-init/diff:/var/lib/docker/overlay2/8a98eb2494cb7d0e1ab3700ff0c51fcec5954abf70002efc0dde83e2a93abf24/diff",
                "MergedDir": "/var/lib/docker/overlay2/e0a0a1ad805f8fae7c83b4471fa29db3d94e5009d4b43a09bbe62ef9c78a1afa/merged",
                "UpperDir": "/var/lib/docker/overlay2/e0a0a1ad805f8fae7c83b4471fa29db3d94e5009d4b43a09bbe62ef9c78a1afa/diff",
                "WorkDir": "/var/lib/docker/overlay2/e0a0a1ad805f8fae7c83b4471fa29db3d94e5009d4b43a09bbe62ef9c78a1afa/work"
            },
            "Name": "overlay2"
        },
        "Mounts": [],
        "Config": {
            "Hostname": "7bc64e5a42f8",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
            ],
            "Cmd": [
                "/bin/sh",
                "-c",
                "while true;do echo hello ahri;sleep 2;done"
            ],
            "Image": "centos",
            "Volumes": null,
            "WorkingDir": "",
            "Entrypoint": null,
            "OnBuild": null,
            "Labels": {
                "org.label-schema.build-date": "20190927",
                "org.label-schema.license": "GPLv2",
                "org.label-schema.name": "CentOS Base Image",
                "org.label-schema.schema-version": "1.0",
                "org.label-schema.vendor": "CentOS"
            }
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "9af81abe6bd007f1056a82713e4bde1c5aa0af07b31e663751a7a9e9c497dd32",
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "Ports": {},
            "SandboxKey": "/var/run/docker/netns/9af81abe6bd0",
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "856f55081b548b49e521a9857e46e759349f8cf7614571b57558d878953897e5",
            "Gateway": "172.17.0.1",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "172.17.0.2",
            "IPPrefixLen": 16,
            "IPv6Gateway": "",
            "MacAddress": "02:42:ac:11:00:02",
            "Networks": {
                "bridge": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,
                    "NetworkID": "fb900b77dd2c24fb160a5dbc5e76bb2bed4265637960757894f1d6bf46912571",
                    "EndpointID": "856f55081b548b49e521a9857e46e759349f8cf7614571b57558d878953897e5",
                    "Gateway": "172.17.0.1",
                    "IPAddress": "172.17.0.2",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:11:00:02",
                    "DriverOpts": null
                }
            }
        }
    }
]
[root@localhost ~]#
```

### 进入正在运行的容器并以命令行交互
`docker [container] attach CONTAINER_NAME|CONTAINER_ID` 直接进入容器日东的终端
`docker [container] exec -it CONTAINER_NAME|CONTAINER_ID bashShell` 在容器内新建终端并进入
```sh
[root@localhost ~]# docker run -ti centos
[root@091a4b9ad553 /]# ls -l /tmp
total 8
-rwx------. 1 root root 1379 Sep 27 17:13 ks-script-0n44nrd1
-rwx------. 1 root root  671 Sep 27 17:13 ks-script-w6m6m_20
[root@091a4b9ad553 /]#

# ctrl + p + q

[root@localhost ~]# docker container ls -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
091a4b9ad553        centos              "/bin/bash"         57 seconds ago      Up 56 seconds                           beautiful_poitras
[root@localhost ~]# docker attach 091a4b9ad553
[root@091a4b9ad553 /]# ls -l /tmp
total 8
-rwx------. 1 root root 1379 Sep 27 17:13 ks-script-0n44nrd1
-rwx------. 1 root root  671 Sep 27 17:13 ks-script-w6m6m_20
[root@091a4b9ad553 /]#

# ctrl + p + q

[root@localhost ~]# docker container ls -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
091a4b9ad553        centos              "/bin/bash"         2 minutes ago       Up 2 minutes                            beautiful_poitras
[root@localhost ~]# docker exec -it 091a4b9ad553 /bin/bash
[root@091a4b9ad553 /]# ls -l /tmp
total 8
-rwx------. 1 root root 1379 Sep 27 17:13 ks-script-0n44nrd1
-rwx------. 1 root root  671 Sep 27 17:13 ks-script-w6m6m_20
[root@091a4b9ad553 /]# exit
[root@localhost ~]#
```

### 直接执行容器里的命令
`docker [container] exec -it CONTAINER_NAME|CONTAINER_ID COMMAND`
```sh
[root@localhost ~]# docker container ls -a
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
091a4b9ad553        centos              "/bin/bash"         5 minutes ago       Up 5 minutes                            beautiful_poitras
[root@localhost ~]# docker container exec -t 091a4b9ad553 ls -l /tmp
total 8
-rwx------. 1 root root 1379 Sep 27 17:13 ks-script-0n44nrd1
-rwx------. 1 root root  671 Sep 27 17:13 ks-script-w6m6m_20
[root@localhost ~]#
```

### 拷贝文件
#### 宿主机 -> 容器
`docker [container] cp -it CONTAINER_NAME|CONTAINER_ID COMMAND`
```sh
[root@localhost ~]# docker container ls -a
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
091a4b9ad553        centos              "/bin/bash"         6 minutes ago       Up 6 minutes                            beautiful_poitras
[root@localhost ~]# docker exec -t 091a4b9ad553 ls -l /tmp
total 8
-rwx------. 1 root root 1379 Sep 27 17:13 ks-script-0n44nrd1
-rwx------. 1 root root  671 Sep 27 17:13 ks-script-w6m6m_20
[root@localhost ~]# ls
ahri.txt  anaconda-ks.cfg
[root@localhost ~]# cat ahri.txt
hello, ahri!
[root@localhost ~]# docker cp ./ahri.txt 091a4b9ad553:/tmp
[root@localhost ~]# docker exec -t 091a4b9ad553 ls -l /tmp
total 12
-rw-r--r--. 1 root root   13 Dec 26 09:06 ahri.txt
-rwx------. 1 root root 1379 Sep 27 17:13 ks-script-0n44nrd1
-rwx------. 1 root root  671 Sep 27 17:13 ks-script-w6m6m_20
[root@localhost ~]# docker exec -t 091a4b9ad553 cat /tmp/ahri.txt
hello, ahri!
[root@localhost ~]#
```
#### 容器 -> 宿主机
`docker [container] cp -it CONTAINER_NAME|CONTAINER_ID COMMAND`
```sh
[root@localhost ~]# docker cp 091a4b9ad553:/tmp/ahri.txt .
[root@localhost ~]# ls
ahri.txt  anaconda-ks.cfg
[root@localhost ~]# cat ./ahri.txt
hello, ahri!
[root@localhost ~]#
```



<Valine />