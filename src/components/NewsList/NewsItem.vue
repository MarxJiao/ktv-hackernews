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
    padding: 15px 0;
    border-top: 1px solid #ccc;
    .title {
        color: #000;
        font-size: 16px;
    }
    .info {
        color: #ccc;
    }
}
</style>

