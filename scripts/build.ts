import * as webpack from 'webpack';

import WebpackConfig from '../config/webpack.config.server';
import ClientWebpackConfig from '../config/webpack.config.client';

const buildConfig = new WebpackConfig('production');

webpack(buildConfig).run((err: Error, status) => {
    console.log(err);
    console.log(status);
});

const clientBuildConfig = new ClientWebpackConfig('production');

webpack(clientBuildConfig).run((err: Error, status) => {
    console.log(err);
    console.log(status);
});