<template>
    <div class="news-item">
        <a class="title" :href="newsItem.url">{{newsItem.title}}</a>
        <div class="info">
            <div class="author">{{newsItem.by}}</div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: ['newsItem']
})
</script>

<style lang="less" scoped>
.news-item {
    padding: 15px;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    margin: 15px 15px 0 15px;
    a {
        text-decoration: none;
    }
    .title {
        color: #000;
        font-size: 16px;
    }
    .info {
        color: #ccc;
    }
}
</style>

