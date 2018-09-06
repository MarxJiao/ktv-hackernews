import * as http from 'http';
import koaWebpack from 'koa-webpack';
import webpack from 'webpack';

import app from './app';
import ClientWebpackConfig from '../../config/webpack.config.client';

const clientWebpackConfig = new ClientWebpackConfig('development');

const compiler = webpack(clientWebpackConfig);

koaWebpack({
    compiler
}).then((middleware) => {
    app.use(middleware);
    // app.callback() 会返回一个能够通过http.createServer创建server的函数，类似express和connect。
    let currentApp = app.callback();
    // 创建server
    const server = http.createServer(currentApp);
    server.listen(3000);

    // 热加载
    if (module.hot) {
        // 监听./app.ts
        module.hot.accept('./app.ts', () => {
            // 如果有改动，就使用新的app来处理请求
            server.removeListener('request', currentApp);
            currentApp = app.callback();
            // 新app要重新使用webpack中间件
            app.use(middleware);
            server.on('request', currentApp);
        });
    }
});