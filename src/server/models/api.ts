/**
 * @file hackernews api
 * @author Marx
 * @description 从 https://github.com/vuejs/vue-hackernews 修改而来
 */

import Firebase from 'firebase/app';
import 'firebase/database';

const config = {
    databaseURL: 'https://hacker-news.firebaseio.com'
};

const app = Firebase.initializeApp(config);

const version = '/v0';

const api = Firebase.database().ref(version);

export default api;
