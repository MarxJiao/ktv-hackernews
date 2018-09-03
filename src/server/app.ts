/**
 * @file koa 主程序文件
 * @author Marx
 */

import * as Koa from 'koa';
import routes from './routes';
import bodyParser from 'koa-bodyparser';

const app = new Koa();

app.use(bodyParser());
app.use(routes);

export default app;
