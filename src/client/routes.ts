import Vue from 'vue';
import Router, {RouteConfig} from 'vue-router';
import NewsList from '../components/NewsList/index.vue';

Vue.use(Router);

const routes: RouteConfig[] = [
    {
        path: '/',
        component: NewsList
    }
]

export const router = new Router({routes})