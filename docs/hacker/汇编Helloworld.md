---
title: 汇编Helloworld
sidebarDepth: 3
---

## 本页目录

[[toc]]

## Helloworld

### 编写汇编代码

```asm
org  0x7c00 ; 指示 BIOS 加载代码时将程序写到内存的 0x7c00

jmp  entry ; 跳转(如果是函数则调用)，此行代码对应的机器码是 3 字节
db   0x90 ; 0x7c00 + 3 处申请1个字节内存空间写入 0x90
DB   "OSKERNEL" ; 0x7c00 + 3 + 1 处开始申请内存空间写入 OSKERNEL
                ; (连续申请9个字节，字符串结尾会分配一个结束符)
DW   512 ; 申请 2 个字节内存空间写入 512
DB   1
DW   1
DB   2
DW   224
DW   2880
DB   0xf0
DW   9
DW   18
DW   2
DD   0
DD   2880
DB   0,0,0x29
DD   0xFFFFFFFF ; 申请 4 个字节内存空间写入 512
DB   "MYFIRSTOS  "
DB   "FAT12   "
RESB  18 ; 把接下来的18个字节的内存全部初始化为 0

entry:
    mov  ax, 0 ; 将 0 赋值给 ax 寄存器(ax大小 2字节)
    mov  ss, ax
    mov  ds, ax
    mov  es, ax
    mov  si, msg

putloop:
    mov  al, [si] ; al 是 ax 寄存器的低 8 位
    add  si, 1 ; 下一个字节
    cmp  al, 0 ; 如果 al 是 0 执行下行
    je   fin
    mov  ah, 0x0e ; 输出
    mov  bx, 15
    int  0x10 ; 执行
    jmp  putloop

fin:
    HLT
    jmp  fin ; 死循环

msg:
    DB    0x0a,  0x0a ; 输出换行符
    db    "hello, world"
    db    0x0a
    db    0 ; 停止输出
```

### 编译汇编代码

```sh
nasm -o boot.bat helloworld.asm
```

### 创建虚拟软盘

```java
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;


public class OperatingSystem {
    private int[] imgContent = new int[]{
        0xeb,0x4e,0x90,0x48,0x45,0x4c,0x4c,0x4f,0x49,0x50,0x4c,0x00,0x02,0x01,0x01,0x00,0x02,0xe0,
        0x00,0x40,0x0b,0xf0,0x09,0x00,0x12,0x00,0x02,0x00,0x00,0x00,0x00,0x00,0x40,0x0b,0x00,0x00,0x00,0x00,0x29,
        0xff,0xff,0xff,0xff,0x48,0x45,0x4c,0x4c,0x4f,0x2d,0x4f,0x53,0x20,0x20,0x20,0x46,0x41,0x54,0x31,0x32,
        0x20,0x20,0x20,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0xb8,0x00,0x00,0x8e,
        0xd0,0xbc,0x00,0x7c,0x8e,0xd8,0x8e,0xc0,0xbe,0x74,0x7c,0x8a,
        0x04,0x83,0xc6,0x01,0x3c,0x00,0x74,0x09,0xb4,0x0e,0xbb,0x0f,0x00,0xcd,0x10,0xeb,0xee,0xf4,0xeb,0xfd
    };

    private ArrayList<Integer> imgByteToWrite = new ArrayList<Integer>();



    public OperatingSystem(String s) {
        for (int i = 0; i < imgContent.length; i++) {
            imgByteToWrite.add(imgContent[i]);
        }

        imgByteToWrite.add(0x0a);
        imgByteToWrite.add(0x0a);
        for (int j = 0; j < s.length(); j++) {
            imgByteToWrite.add((int)s.charAt(j));
        }
        imgByteToWrite.add(0x0a);

        int len = 0x1fe;
        int curSize = imgByteToWrite.size();
        for (int k = 0; k < len - curSize; k++) {
            imgByteToWrite.add(0);
        }

        //0x1fe-0x1f: 0x55, 0xaa
        //0x200-0x203: f0 ff  ff
        imgByteToWrite.add(0x55);
        imgByteToWrite.add(0xaa);
        imgByteToWrite.add(0xf0);
        imgByteToWrite.add(0xff);
        imgByteToWrite.add(0xff);

        len = 0x168000;
        curSize = imgByteToWrite.size();
        for (int l = 0; l < len - curSize; l++) {
            imgByteToWrite.add(0);
        }

    }

    public void makeFllopy()   {
        try {
            DataOutputStream out = new DataOutputStream(new FileOutputStream("system.img"));
            for (int i = 0; i < imgByteToWrite.size(); i++) {
                out.writeByte(imgByteToWrite.get(i).byteValue());
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }

    public static void main(String[] args) {
        OperatingSystem op = new OperatingSystem("hello, this is my first line of my operating system code");
        op.makeFllopy();
    }
}
```

<Valine />
