<template>
    <div id="all-article" class="all-article">
        <label for="show" class="label"
            ><span class="show-btn">展开</span>
            <a href="/hacker">Be a Hacker</a>
        </label>
        <input
            hidden
            type="checkbox"
            checked
            name="show"
            id="show"
            class="show"
        />
        <div class="cate">
            <div class="item">
                <a
                    href="/hacker/%E5%86%99%E4%B8%80%E4%B8%AA%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%86%85%E6%A0%B8.html"
                    >写一个操作系统内核</a
                >
            </div>
            <div class="item">
                <div class="tab"></div>
                <a
                    href="/hacker/%E5%86%99%E4%B8%80%E4%B8%AA%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%86%85%E6%A0%B8.html#helloworld"
                    >汇编helloworld</a
                >
            </div>
            <div class="item">
                <div class="tab"></div>
                <div class="tab"></div>
                <a
                    href="/hacker/%E5%86%99%E4%B8%80%E4%B8%AA%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%86%85%E6%A0%B8.html#编写汇编代码"
                    >编写汇编代码</a
                >
            </div>
            <div class="item">
                <div class="tab"></div>
                <div class="tab"></div>
                <a
                    href="/hacker/%E5%86%99%E4%B8%80%E4%B8%AA%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%86%85%E6%A0%B8.html#编译汇编代码"
                    >编译汇编代码</a
                >
            </div>
            <div class="item">
                <div class="tab"></div>
                <div class="tab"></div>
                <a
                    href="/hacker/%E5%86%99%E4%B8%80%E4%B8%AA%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%86%85%E6%A0%B8.html#创建虚拟软盘"
                    >创建虚拟软盘</a
                >
            </div>
            <div class="item">
                <div class="tab"></div>
                <div class="tab"></div>
                <a
                    href="/hacker/%E5%86%99%E4%B8%80%E4%B8%AA%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%86%85%E6%A0%B8.html#将二进制文件写入软盘"
                    >将二进制文件写入软盘</a
                >
            </div>
            <div class="item">
                <div class="tab"></div>
                <div class="tab"></div>
                <a
                    href="/hacker/%E5%86%99%E4%B8%80%E4%B8%AA%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%86%85%E6%A0%B8.html#启动系统"
                    >启动系统</a
                >
            </div>
            <div class="item">
                <div class="tab"></div>
                <a
                    href="/hacker/%E5%86%99%E4%B8%80%E4%B8%AA%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%86%85%E6%A0%B8.html#汇编读软盘"
                    >汇编读软盘</a
                >
            </div>
            <div class="item">
                <div class="tab"></div>
                <div class="tab"></div>
                <a
                    href="/hacker/%E5%86%99%E4%B8%80%E4%B8%AA%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%86%85%E6%A0%B8.html#读取软盘的汇编代码"
                    >读取软盘的汇编代码</a
                >
            </div>
        </div>
        稍后更新
    </div>
</template>

<script>
export default {
    name: 'all-article',
    data() {
        return {}
    },
    mounted() {}
}
</script>

<style scoped>
#all-article {
    border-bottom: solid 1px #ddd;
    padding-bottom: 10px;
}
#all-article .label a {
    font-size: 18px;
}
#all-article .cate {
    overflow: hidden;
}
#all-article .show-btn {
    cursor: pointer;
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
.show:checked + .cate {
    height: 0;
}
</style>
