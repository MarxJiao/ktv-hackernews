/**
 * @file 前端入口文件
 * @author Marx
 */

import Vue from 'vue';
import {router} from './routes';
import {store} from '../store';
import App from './App.vue';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});


