<template>
  <div id="all-article" class="all-article">
    <div class="special" v-for="i in catlog">
      <input hidden type="checkbox" checked name="show" :id="i.path" class="show" />
      <label :for="i.path" class="label">
        <span class="show-btn">
          <span class="img"></span>
        </span>
        <a :href="i.path">{{ i.name }}</a>
      </label>
      <div class="cate">
        <div class="item" v-for="j in i.children">
          <div class="tab" v-for="n in j.tabs"></div>
          <a :href="j.path">{{ j.name }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'all-article',
  data() {
    return {
      catlog: [
        {
          path: '/hacker',
          name: 'Be a Hacker',
          children: [
            {
              tabs: 0,
              path: '/hacker/写一个操作系统内核.html',
              name: '写一个操作系统内核'
            },
            {
              tabs: 1,
              path: '/hacker/写一个操作系统内核.html#helloworld',
              name: '汇编helloworld'
            },
            {
              tabs: 2,
              path: '/hacker/写一个操作系统内核.html#编写汇编代码',
              name: '编写汇编代码'
            },
            {
              tabs: 2,
              path: '/hacker/写一个操作系统内核.html#编译汇编代码',
              name: '编译汇编代码'
            },
            {
              tabs: 2,
              path: '/hacker/写一个操作系统内核.html#创建虚拟软盘',
              name: '创建虚拟软盘'
            },
            {
              tabs: 2,
              path: '/hacker/写一个操作系统内核.html#创建虚拟软盘',
              name: '创建虚拟软盘'
            },
            {
              tabs: 2,
              path: '/hacker/写一个操作系统内核.html#将二进制文件写入软盘',
              name: '将二进制文件写入软盘'
            },
            {
              tabs: 2,
              path: '/hacker/写一个操作系统内核.html#启动系统',
              name: '启动系统'
            },
            {
              tabs: 1,
              path: '/hacker/写一个操作系统内核.html#汇编读软盘',
              name: '汇编读软盘'
            },
            {
              tabs: 2,
              path: '/hacker/写一个操作系统内核.html#读取软盘的汇编代码',
              name: '读取软盘的汇编代码'
            }
          ]
        },
        {
          path: '/Linux',
          name: 'Linux',
          children: [
            {
              tabs: 0,
              path: '/Linux/虚拟机安装Centos7.html',
              name: '虚拟机安装Centos7'
            },
            {
              tabs: 1,
              path: '/Linux/虚拟机安装Centos7.html#编辑-nat-网段-可选操作',
              name: '编辑-nat-网段-可选操作'
            },
            {
              tabs: 1,
              path: '/Linux/虚拟机安装Centos7.html#创建虚拟主机',
              name: '创建虚拟主机'
            },
            {
              tabs: 1,
              path: '/Linux/虚拟机安装Centos7.html#安装操作系统',
              name: '安装操作系统'
            },
            {
              tabs: 1,
              path: '/Linux/虚拟机安装Centos7.html#进入系统-关机-设置快照',
              name: '进入系统-关机-设置快照'
            },
            {
              tabs: 0,
              path: '/Linux/CentOS7网络配置.html',
              name: 'CentOS7网络配置'
            },
            {
              tabs: 1,
              path: '/Linux/CentOS7网络配置.html#网络管理',
              name: '网络管理'
            },
            {
              tabs: 1,
              path: '/Linux/CentOS7网络配置.html#远程工具',
              name: '远程工具'
            },
            {
              tabs: 0,
              path: '/Linux/系统符号.html',
              name: 'CentOS7系统符号'
            },
            {
              tabs: 1,
              path: '/Linux/系统符号.html#系统特殊符号',
              name: '系统特殊符号'
            },
            {
              tabs: 1,
              path: '/Linux/系统符号.html#系统通配符号',
              name: '系统通配符号'
            },
            {
              tabs: 1,
              path: '/Linux/系统符号.html#正则符号',
              name: '正则符号'
            },
            {
              tabs: 0,
              path: '/Linux/Linux三剑客.html',
              name: 'Linux三剑客'
            },
            {
              tabs: 1,
              path: '/Linux/Linux三剑客.html#grep-命令',
              name: 'grep-命令'
            },
            {
              tabs: 1,
              path: '/Linux/Linux三剑客.html#sed-命令',
              name: 'sed-命令'
            },
            {
              tabs: 1,
              path: '/Linux/Linux三剑客.html#awk-命令',
              name: 'awk-命令'
            }
          ]
        },
        {
          path: '/docker',
          name: 'Docker',
          children: [
            {
              tabs: 0,
              path: '/docker/前世今生.html',
              name: '前世今生'
            },
            {
              tabs: 0,
              path: '/docker/Docker使用前提.html',
              name: 'Docker使用前提'
            },
            {
              tabs: 0,
              path: '/docker/CentOS7安装Docker.html',
              name: 'CentOS7安装Docker'
            },
            {
              tabs: 0,
              path: '/docker/Docker镜像命令.html',
              name: 'Docker镜像命令'
            },
            {
              tabs: 0,
              path: '/docker/Docker容器命令.html',
              name: 'Docker容器命令'
            },
            {
              tabs: 0,
              path: '/docker/Docker网络配置.html',
              name: 'Docker网络配置'
            },
            {
              tabs: 0,
              path: '/docker/Docker数据卷.html',
              name: 'Docker数据卷'
            },
            {
              tabs: 0,
              path: '/docker/镜像制作.html',
              name: '镜像制作'
            },
            {
              tabs: 0,
              path: '/docker/DockerFile.html',
              name: 'DockerFile'
            }
          ]
        },
        {
          path: '/nginx',
          name: 'Nginx',
          children: [
            {
              tabs: 0,
              path: '/nginx/Nginx基本概念.html',
              name: 'Nginx基本概念'
            },
            {
              tabs: 0,
              path: '/nginx/Nginx原理.html',
              name: 'Nginx原理'
            },
            {
              tabs: 0,
              path: '/nginx/CentOS7安装Nginx.html',
              name: 'CentOS7安装Nginx'
            },
            {
              tabs: 0,
              path: '/nginx/Docker安装Nginx.html',
              name: 'Docker安装Nginx'
            },
            {
              tabs: 0,
              path: '/nginx/Nginx配置文件.html',
              name: 'Nginx配置文件'
            },
            {
              tabs: 0,
              path: '/nginx/Nginx反向代理.html',
              name: 'Nginx反向代理'
            },
            {
              tabs: 0,
              path: '/nginx/Nginx负载均衡.html',
              name: 'Nginx负载均衡'
            },
            {
              tabs: 0,
              path: '/nginx/Nginx动静分离.html',
              name: 'Nginx动静分离'
            },
            {
              tabs: 0,
              path: '/nginx/Nginx高可用集群.html',
              name: 'Nginx高可用集群'
            }
          ]
        },
        {
          path: '/redis',
          name: 'Redis',
          children: [
            {
              tabs: 0,
              path: '/redis/Redis数据类型及应用场景.html',
              name: 'Redis数据类型及应用场景'
            },
            {
              tabs: 0,
              path: '/redis/Redis主从复制.html',
              name: 'Redis主从复制'
            },
            {
              tabs: 0,
              path: '/redis/Redis哨兵.html',
              name: 'Redis哨兵'
            },
            {
              tabs: 0,
              path: '/redis/Redis集群.html',
              name: 'Redis集群'
            }
          ]
        },
        {
          path: '/mongo',
          name: 'Mongo',
          children: [
            {
              tabs: 0,
              path: '/mongo/主从复制.html',
              name: 'Mongo主从复制'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
#all-article {
  border-bottom: solid 1px #ddd;
  padding-bottom: 10px;
}
#all-article .label a {
  font-size: 20px;
}
#all-article .cate {
  overflow: hidden;
}
#all-article .show-btn {
  cursor: pointer;
}
#all-article .show-btn .img {
  display: inline-block;
  width: 18px;
  transition: 0.3s;
  height: 18px;
  background: url('./down.svg') no-repeat center;
  background-size: 20px 20px;
}
#all-article .cate .item {
  height: 20px;
  padding-left: 40px;
}
#all-article .cate .item .tab {
  width: 40px;
  height: 100%;
  float: left;
}
.show:checked + .label .img {
  transform: rotate(-90deg);
}
.show:checked + .label + .cate {
  height: 0;
}
</style>
