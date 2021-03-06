---
title: Linux三剑客
sidebarDepth: 3
---

## 本页目录

[[toc]]

## grep 命令

| 参数    | 作用                                                                                                         |
| ------- | ------------------------------------------------------------------------------------------------------------ |
| -E      | 开启扩展（Extend）的正则表达式                                                                               |
| -i      | 忽略大小写（ignore case）                                                                                    |
| -v      | 反过来（invert），只打印没有匹配的，而匹配的反而不打印                                                       |
| -n      | 显示行号                                                                                                     |
| -w      | 被匹配的文本只能是单词，而不能是单词中的某一部分，如有 liker，而只查找 like，可以使用-w 选项来避免匹配 liker |
| -c      | 显示总共有多少行被匹配到了，而不是显示被匹配到的内容，注意如果同时使用-cv 选项是显示有多少行没有被匹配到     |
| -o      | 只显示被模式匹配到的字符串                                                                                   |
| --color | 将匹配到的内容以颜色高亮显示                                                                                 |
| -A n    | 显示匹配到的字符串所在的行及其后 n 行，after                                                                 |
| -B n    | 显示匹配到的字符串所在的行及其前 n 行，before                                                                |
| -C n    | 显示匹配到的字符串所在的行及其前后各 n 行，context                                                           |

## sed 命令

| 参数      | 作用                                                             |
| --------- | ---------------------------------------------------------------- |
| -e <脚本> | 或--expression=<脚本> 以选项中指定的 script 来处理输入的文本文件 |
| -f <脚本> | 或--file=<脚本> 以选项中指定的 script 文件来处理输入的文本文件   |
| -h        | 或--help 显示帮助                                                |
| -n        | 或--quiet 或--silent 仅显示 script 处理后的结果                  |
| -V        | 或--version 显示版本信息                                         |
| -a        | 新增， a 后面接字符串，字符串会在新的一行出现(当前的下一行)      |
| -c        | 替换， c 后面接字符串，替换 n1,n2 之间的行                       |
| -d        | 删除                                                             |
| -i        | 插入， i 后面接字符串，字符串会在新的一行出现(当前的上一行)      |
| -p        | 打印，通常与参数 -n 一起使用                                     |
| -s        | 替换，直接进行替换，通常搭配正规表达式                           |

## awk 命令

| 变量     | 解释                                               |
| -------- | -------------------------------------------------- |
| FILENAME | 当前文件名                                         |
| FS       | 字段分隔符，默认是空格和制表符                     |
| RS       | 行分隔符，用于分割每一行，默认是换行符             |
| OFS      | 输出字段的分隔符，用于打印时分隔字段，默认为空格   |
| ORS      | 输出记录的分隔符，用于打印时分隔记录，默认为换行符 |
| OFMT     | 数字输出的格式，默认为％.6g                        |

| 函数      | 解释           |
| --------- | -------------- |
| tolower() | 字符转为小写   |
| length()  | 返回字符串长度 |
| substr()  | 返回子字符串   |
| sin()     | 正弦           |
| cos()     | 余弦           |
| sqrt()    | 平方根         |
| rand()    | 随机数         |

## 待补充...

<Valine />
