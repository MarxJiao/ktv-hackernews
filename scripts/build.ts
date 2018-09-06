import * as webpack from 'webpack';

import ServerWebpackConfig from '../config/webpack.config.server';

import ClientWebpackConfig from '../config/webpack.config.client';

const serverWebpackConfig = new ServerWebpackConfig('production');

const serverCompiler = webpack(serverWebpackConfig);

serverCompiler.run((err, status) => {
    console.log(err);
})

const clientWebpackConfig = new ClientWebpackConfig('production');

const clientCompiler = webpack(clientWebpackConfig);

clientCompiler.run((err, status) => {
    console.log(err);
});
