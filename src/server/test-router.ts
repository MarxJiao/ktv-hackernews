import Router from 'koa-router';

const router = new Router();

router.get('/test', async ctx => {
    ctx.body = 'hello world page!'
})

export default router.routes();
