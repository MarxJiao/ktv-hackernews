/**
 * @file 前端代码打包配置
 * @author Marx
 */

import * as path from 'path';
import * as webpack from 'webpack';
import {Configuration, ExternalsElement} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {VueLoaderPlugin} from 'vue-loader';

export default class implements Configuration {
    target: Configuration['target'] = "web";
    mode: Configuration['mode'] = 'production';

    // 路径是相对于项目根目录的。
    entry = ['./src/client/main.ts'];

    output = {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: "app.js"
    };

    externals: ExternalsElement[] = [];

    module = {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            appendTsSuffixTo: [/\.vue$/],
                            // 路径是相对于项目根目录的。
                            configFile: path.resolve('./config/tsconfig.src.json')
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    'postcss-loader'
                ]
            }
        ]
    };

    resolve = {
        extensions: [".ts", ".js", ".json"],
    };

    devtool: Configuration['devtool'];

    // 开发环境也使用NoEmitOnErrorsPlugin
    plugins = [
        new VueLoaderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/client/index.html',
            inject: true
        })
    ];

    constructor(mode: Configuration['mode']) {
        this.mode = mode;
        if (mode === 'development') {
            this.devtool = 'cheap-module-eval-source-map';
        }
    }
}
