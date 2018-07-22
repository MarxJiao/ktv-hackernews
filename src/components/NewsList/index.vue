<template>
    <div>
        newsList
        <NewsItem v-for="item of newsList" :key="item.id" :news-item="item"></NewsItem>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NewsItem from './NewsItem.vue';
import {mapState} from 'vuex';
import {State} from '../../store/state';

export default Vue.extend({
    computed: mapState({
        newsList: (state: State) => state.newsList
    }),
    components: {
        NewsItem
    }
})
</script>

