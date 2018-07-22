<template>
    <div>
        Hello {{name}}!
        <router-view></router-view>
    </div>
    
</template>

<script lang="ts">
import Vue from 'vue';
import {mapActions} from 'vuex';

export default Vue.extend({
    data() {
        return {
            name: 'World'
        }
    },
    methods: mapActions(['getInitData']),
    created() {
        this.getInitData();
    }

})
</script>
