/**
 * @file 路由文件
 * @author Marx
 */

import Router from 'koa-router';

import getTopStorires from './actions/getTopStories';
import {getInitData} from './actions/getInitData';

const router = new Router();

router.get('/test', async ctx => {
    ctx.body = 'hello world page!';
})

router.get('/api/gettops', async ctx => {
    ctx.body = await getTopStorires(10);
})

router.get('/api/getinitdata', async ctx => {
    ctx.body = await getInitData();
})

export default router.routes();
