/**
 * @file 路由文件
 * @author Marx
 */

import Router from 'koa-router';
import {getStoriesByIds} from './actions/getStoriesByIds';
import {getInitData} from './actions/getInitData';

const router = new Router();

router.get('/test', async ctx => {
    ctx.body = 'hello world page!';
})

router.get('/api/getinitdata', async ctx => {
    ctx.body = await getInitData();
})

router.post('/api/getstories', async ctx => {
    const ids = ctx.request.body.ids;
    ctx.body = await getStoriesByIds(ids)
})

export default router.routes();
