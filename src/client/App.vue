<template>
    <div>
        Hello {{name}}!
        <router-view></router-view>
        <button @click="nextPage">下一页</button>
    </div>
    
</template>

<script lang="ts">
import Vue from 'vue';
import {mapActions, mapState} from 'vuex';
import {State} from '../store/state';
export default Vue.extend({
    data() {
        return {
            name: 'World'
        }
    },
    methods: {
        ...mapActions(['getInitData', 'getStories']),
        nextPage() {
            this.getStories(this.page + 1);
        }
    },
    computed: mapState({
        page: (state: State) => state.page
    }),
    created() {
        this.getInitData();
    }

})
</script>
