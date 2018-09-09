/**
 * @file koa 主程序文件
 * @author Marx
 */

import * as Koa from 'koa';
import bodyParser from 'koa-bodyparser';

import routes from './routes';
import {getErrorData} from '../utils/resData';

async function errorHandle(ctx, next) {
    try {
        await next()
    } catch (err) {
        ctx.status = err.status || 500
        ctx.body = getErrorData(5001);
        ctx.app.emit('error', err, ctx)
    }
}
  
const app = new Koa();

app.use(bodyParser());
app.use(errorHandle);
app.use(routes);

export default app;
