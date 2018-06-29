import * as webpack from 'webpack';

import WebpackConfig from '../config/webpack.config.server';

const buildConfig = new WebpackConfig('production');

webpack(buildConfig).run((err: Error) => {
    console.log(err);
});
