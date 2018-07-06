/**
 * @file 路由文件
 * @author Marx
 */

import Router from 'koa-router';

import getTopStorires from './actions/getTopStories';

const router = new Router();

router.get('/test', async ctx => {
    ctx.body = 'hello world page!';
})

router.get('/api/gettops', async ctx => {
    ctx.body = await getTopStorires(10);
})

export default router.routes();
