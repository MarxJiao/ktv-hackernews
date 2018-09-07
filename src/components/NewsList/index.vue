<template>
    <div>
        <NewsItem v-for="item of newsList" :key="item.id" :news-item="item"></NewsItem>
        <div class="news-next-page" @click="nextPage">下一页</div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NewsItem from './NewsItem.vue';
import {mapState, mapActions} from 'vuex';
import {State} from '../../store/state';

export default Vue.extend({
    computed: mapState({
        newsList: (state: State) => state.newsList,
        page: (state: State) => state.page
    }),
    methods: {
        ...mapActions(['getInitData', 'getStories']),
        nextPage() {
            this.getStories(this.page + 1);
        }
    },
    created() {
        this.getInitData();
    },
    components: {
        NewsItem
    }
})
</script>

<style lang="less">
.news-next-page {
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    display: block;
    padding: 15px;
    margin: 20px 15px;
}
</style>


