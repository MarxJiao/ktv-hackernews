/**
 * @file koa 主程序文件
 * @author Marx
 */

import * as Koa from 'koa';
import routes from './routes';

const app = new Koa();

app.use(routes);

export default app;
