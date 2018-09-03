/**
 * @file 前端入口文件
 * @author Marx
 */

import 'whatwg-fetch';
import Vue from 'vue';
import {router} from './routes';
import {store} from '../store';
import App from './App.vue';

import runtime from 'serviceworker-webpack-plugin/lib/runtime';

if ('serviceWorker' in navigator) {
    const registration = runtime.register();
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
