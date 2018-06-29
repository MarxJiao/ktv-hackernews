import * as webpack from 'webpack';

import WebpackConfig from '../config/webpack.config.server';

const devConfig = new WebpackConfig('development');

webpack(devConfig).watch({
    aggregateTimeout: 300
}, (err: Error, status) => {
    console.log(err);
});
