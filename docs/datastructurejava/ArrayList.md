---
title: ArrayList
sidebarDepth: 3
---

## 本页目录

[[toc]]

## [github](https://github.com/fox-ahri/DataStructureJAVA)

## 实现

```java
package com.ahriknow.DynamicArray.Realization;

public class ArrayList {
    private int size;  // 大小
    private int[] elements;  // 所有元素

    private static final int DEFAULT_CAPACITY = 10;  // 默认大小

    public ArrayList() {
        this(DEFAULT_CAPACITY);
    }

    public ArrayList(int capacity) {
        if (capacity < DEFAULT_CAPACITY)
            capacity = DEFAULT_CAPACITY;
        elements = new int[capacity];
    }

    /**
     * 获取数组长度
     *
     * @return 数组长度
     */
    public int size() {
        return size;
    }

    /**
     * 判断数组是否为空
     *
     * @return 是否为空
     */
    public boolean isEmpty() {
        return size == 0;
    }

    /**
     * 根据下标获取元素
     *
     * @param index 索引
     * @return 元素
     */
    public int get(int index) {
        if (index < 0 || index >= size)
            throw new IndexOutOfBoundsException("索引越界");
        return elements[index];
    }

    /**
     * 根据下标设置元素
     *
     * @param index   索引
     * @param element 元素
     * @return 旧的元素
     */
    public int set(int index, int element) {
        if (index < 0 || index >= size)
            throw new IndexOutOfBoundsException("索引越界");
        int old = elements[index];
        elements[index] = element;
        return old;
    }

    /**
     * 获取元素下标
     *
     * @param element 元素
     * @return 索引
     */
    public int indexOf(int element) {
        for (int i = 0; i < size; i++) {
            if (elements[i] == element)
                return i;
        }
        return -1;
    }

    /**
     * 判断数组是否包含元素
     *
     * @param element 元素
     * @return 是否包含
     */
    public boolean contains(int element) {
        return indexOf(element) != -1;
    }

    /**
     * 清空数组
     */
    public void clear() {
        size = 0;
    }

    /**
     * 添加元素
     *
     * @param element 元素
     */
    public void add(int element) {
        elements[size++] = element;
    }

    /**
     * 根据索引删除元素
     *
     * @param index 索引
     * @return 删除的元素
     */
    public int remove(int index) {
        if (index < 0 || index >= size)
            throw new IndexOutOfBoundsException("索引越界");
        int old = elements[index];
        for (int i = index + 1; i < size; i++) {
            elements[i - 1] = elements[i];
        }
        size--;
        return old;
    }

    public String toString() {
        if (size == 0)
            return "0 - []";
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append(size).append(" - [").append(elements[0]);
        for (int i = 1; i < size; i++) {
            stringBuilder.append(", ").append(elements[i]);
        }
        stringBuilder.append("]");
        return stringBuilder.toString();
    }
}
```

```java
package com.ahriknow.DynamicArray;

import com.ahriknow.DynamicArray.Realization.ArrayList;

public class DynamicArrayMain {
    public static void main(String[] args) {
        ArrayList array = new ArrayList();
        array.add(99);
        array.add(88);
        array.add(77);
        System.out.println(array.toString());
        
        System.out.println(array.set(0, 22));
        System.out.println(array.toString());

        System.out.println(array.remove(0));
        System.out.println(array.toString());

        array.clear();
        System.out.println(array.toString());
    }
}
```

```sh
3 - [99, 88, 77]
99
3 - [22, 88, 77]
22
2 - [88, 77]
0 - []
```

<Valine />
