---
title: 线性表
---

## 本页目录

[[toc]]

## 什么是线性表

> 具有相同类型的 n (n >= 0) 个元素的有序序列，其中 n 为表长，当 n = 0 时，该表为空表。(逻辑结构)

## 线性表特征

-   集合中必存在唯一的一个“第一元素”。
-   集合中必存在唯一的一个 “最后元素” 。
-   除最后一个元素之外，均有唯一的后继(后件)。
-   除第一个元素之外，均有唯一的前驱(前件)。

## 线性表基本操作

-   `InitList(&L);` 初始化表。构造一个空的线性表 L。
-   `DestroyList(&L);` 销毁操作。销毁线性表，并释放线性表 L 所占用的内存空间。
-   `LocateElem(L, e);` 按值查找。在表 L 中查找给定关键值的索引。
-   `GetElem(L, i);` 按位查找。获取表 L 中的第 i 个位置的元素的值。
-   `ListInsert(&L, i, e);` 插入操作。在表 L 中的第 i 个位置上插入指定元素。
-   `ListDelete(&L, i, &e);` 删除操作。删除表 L 中第 i 个位置的元素，并用 e 接收删除元素的值。
-   `PrintList(L);` 输出操作。按前后顺序输出表 L 的所有元素的值。
-   `Empty(L);` 判空操作。判断表 L 是否为空表。
-   `Length(L);` 求表长操作。求表 L 中元素的个数。

## 线性表表示方法

### 顺序表示

#### 什么是顺序表

> 线性表的顺序存储，顺序表是将表中的结点依次存放在计算机内存中一组地址连续的存储单元中。

[SequenceList](/algorithmanddatastructure/SequenceList)

#### 顺序表的分配方法

-   静态分配

```c
#define MaxSize 50

typedef int ElemType;

typedef struct {
    ElemType data[MaxSize];
    int length;
}SqList;
```

-   动态分配

> 重新申请新的连续内存空间，并把元素转移到新的空间上，释放原有空间。

```c
#define MaxSize 50

typedef int ElemType;

typedef struct {
    ElemType *data;
    int length;
}SqList;
```

    - 动态分配方法
        - C语言: `L.data  = (ElemType*)malloc(sizeof(ElemType)*InitSize);`
        - C++: `L.data = new ElemType[InitSize];`

### 链式表示

#### 什么是链表

> 线性表的链式存储

#### 常见的链表

-   双链表
-   循环链表
-   静态链表

<Valine />
