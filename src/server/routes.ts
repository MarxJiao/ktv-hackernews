/**
 * @file 路由文件
 * @author Marx
 */

import Router from 'koa-router';
import {getSuccessData} from '../utils/resData';
import {getStoriesByIds} from './actions/getStoriesByIds';
import {getInitData} from './actions/getInitData';

const router = new Router();

router.get('/api/getinitdata', async ctx => {
    ctx.body = getSuccessData(await getInitData());
});

router.post('/api/getstories', async ctx => {
    const ids = ctx.request.body.ids;
    ctx.body = getSuccessData(await getStoriesByIds(ids));
});

export default router.routes();
