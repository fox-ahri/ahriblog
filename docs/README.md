---
home: true
# heroImage: /avatar.ico
heroText: Ahri Home
tagline: 狸知 博客
# actionText: 关 于 我
# actionLink: /about/
# features:
# - title: 简洁至上
#   details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
# - title: Vue驱动
#   details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
# - title: 高性能
#   details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2019 ahriknow.com
---

<CategoryList />

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```md
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

> 引用
>> 还是引用
>>> 第三级引用
```md
> 引用
>> 还是引用
>>> 第三级引用
```

- 列表 1
- 列表 2
+ 列表 1
+ 列表 2
* 列表 1
* 列表 2
1. 列表内容
2. 列表内容
3. 列表内容
```md
- + * 用哪一个都可以，符号后有空格
- 列表 1
- 列表 2
+ 列表 1
+ 列表 2
* 列表 1
* 列表 2
有序列表的 . 后有空格
1. 列表内容
2. 列表内容
3. 列表内容
```

|表头 1|表头 2|表头 3|
|-|-|-|
|内容 1|内容 2|内容 3|
|内容 1|内容 2|内容 3|
```md
|表头 1|表头 2|表头 3|
|-|-|-|
|内容 1|内容 2|内容 3|
|内容 1|内容 2|内容 3|
```

*倾斜*
**加粗**
***倾斜加粗***
~~删除线~~
```md
*倾斜*
**加粗**
***倾斜加粗***
~~删除线~~
```

---
----
***
*****
```md
三个或者三个以上的 - 或 * 都可以
---
----
***
*****
```

![图片无效时的提示](https://aaahri.com/image/?h=100&w=200)
```md
![图片无效时的提示](https://aaahri.com/image/?h=100&w=200)
```

[超链接](https://www.ahriknow.com/#/book/read?_id=5da43726d8d0d5aa780aa9ff&name=%E6%96%87%E6%A1%A3%20-%20Ahridata&doc=1574331073477)
```md
[超链接](https://www.ahriknow.com/#/book/read?_id=5da43726d8d0d5aa780aa9ff&name=%E6%96%87%E6%A1%A3%20-%20Ahridata&doc=1574331073477)
```

```java
class Hello{
    public static void main(String[] args){
        System.out.println("hello, world");
    }
}
```
```md
``java //前边应该三个 ` （ESC 下方的按键）
class Hello{
    public static void main(String[] args){
        System.out.println("hello, world");
    }
}
`` //前边应该三个 `
```

`cd /home/test`
```md
`cd /home/test`
```
