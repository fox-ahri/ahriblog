<template>
    <div id="category-list" class="category-list">
        <h3>所有文章：</h3>
        <div class="list">
            <a class="link" href="/hacker">
                Be a Hacker
                <span>准备毕设，暂停更新</span>
            </a>
        </div>
        <br />
        <div class="list">
            <a class="link" href="/Linux运维">
                Linux运维
                <!-- <span>正在更新</span> -->
            </a>
        </div>
        <div class="list">
            <a class="link" href="/docker">
                Docker
                <!-- <span>正在更新</span> -->
            </a>
        </div>
        <div class="list">
            <a class="link" href="/nginx">
                Nginx
                <!-- <span>正在更新</span> -->
            </a>
        </div>
        <div class="list">
            <a class="link" href="/redis">
                Redis
                <!-- <span>待补充</span> -->
            </a>
        </div>
        <div class="list">
            <a class="link" href="/mongo">
                Mongo
                <span>正在更新</span>
            </a>
        </div>
        <div class="list">
            <a class="link" href="/algorithmanddatastructure">
                Algorithm and data structure
                <span>正在更新</span>
            </a>
        </div>
        <!-- <div class="list">
      <a class="link" href="/lvs">
        LVS
        <span>测试</span>
      </a>
    </div> -->
    </div>
</template>

<script>
export default {
    name: 'category-list'
}
</script>

<style scoped>
#category-list {
    border-bottom: solid 1px #ddd;
    padding-bottom: 10px;
}
#category-list > .list {
    padding-left: 40px;
}
#category-list > .list > .link {
    font-size: 22px;
}
#category-list > .list > .link > span {
    font-size: 12px;
}
</style>
