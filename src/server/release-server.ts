import * as http from 'http';
import * as serve from 'koa-static';
import app from './app';

app.use(serve('.', {defer: true}));

// app.callback() 会返回一个能够通过http.createServer创建server的函数，类似express和connect。
let currentApp = app.callback();
// 创建server
const server = http.createServer(currentApp);
server.listen(3000);
