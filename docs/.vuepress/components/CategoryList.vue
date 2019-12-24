<template>
    <div id="category-list" class="category-list">
        <h3>所有文章：</h3>
        <div class="list">
            <a class="link" href="/lvs">LVS</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'category-list'
}
</script>

<style scoped>
#category-list{
    border-bottom: solid 1px #ddd;
    padding-bottom: 10px;
}
#category-list > .list {
    padding-left: 40px; 
}
#category-list > .list > .link {
    font-size: 22px;
}
</style>
