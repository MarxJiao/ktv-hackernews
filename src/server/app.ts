import * as Koa from 'koa';
import routes from './test-router';

const app = new Koa();

app.use(routes);

export default app;
