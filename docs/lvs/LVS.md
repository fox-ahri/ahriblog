---
title: LVS
---

## LVS概念:
#### lvs 集群类型中的术语:
- VS: Virtual Server(lvs), Director Server(DS)
    - Dispantcher(调度器), Load Balancer
- RS: Real Server(lvs), upstream server(nginx)
    - backend server(haproxy)
- CIP: Client IP
- VIP: Virtual server IP
- DIP: Director IP
- RIP: Real server IP
- 访问流程: CIP <--> VIP == DIP <--> RIP


## lvs集群的类型:
#### lvs: ipvsadm/ipvsadm
- ipvsadm: 用户空间的命令行工具, 规则管理器, 用于管理集群服务及RealServer
- ipvs: 工作与内核空间netfilter的INPUT钩子上的框架
#### lvs集群的类型:
- lvs-nat: 修改请求报文的目标IP, 多目标IP的DNAT
- lvs-dr: 操纵封装新的MAC地址
- lvs-tun: 在原请求IP报文之外新加一个IP首部
- lvs-fullnat: 修改请求报文的源和目标IP


## lvs-nat模式:
#### lvs-nat: 
本质是多目标IP的DNAT, 通过将请求报文中的目标地址和目标端口修改为某挑出的RS的RIP和PORT实现转发
- RIP和DIP应在同一个IP网络, 且应使用私网地址, RS的网关要只想DIP
- 请求报文和相应报文都必须经由Director转发, Director易于成为系统瓶颈
- 支持端口映射, 可修改请求报文的目标PORT
- VS必须是Linux系统, RS可以是任意OS


## lvs-dr模式:
#### lvs-dr: 
Direct Routing, 直接路由, LVS默认模式, 应用最广泛, 通过为请求报文重新封装一个MAC首部进行转发
, 源MAC是DIP所在的接口的MAC, 目标MAC是某挑选出的RS的RIP所在接口的MAC地址, 以及目标IP/PORT均保持不变
- Director和各RS都配置有VIP
- 确保前端路由器将目标IP为VIP的请求报文法网Director
    - 在前端网关做静态绑定VIP和Director的MAC地址
    - 在RS上使用arptables工具
        - `arptables -A IN -d $VIP -j DROP`
        - `arptables -A OUT -s $VIP -j mangle --mangle-ip-s $RIP`
    - 在RS上修改内核参数以限制arp通告及应答级别
        - `/prop/sys/net/ipv4/conf/all/arp_ignore`
        - `/prop/sys/net/ipv4/conf/all/arp_announce`

<Valine />