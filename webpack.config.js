const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/main.js',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        }),
    ],

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    devServer: {
        static: {
            directory: path.join(__dirname),
        },
        compress: true,
        port: 9000,
    },
}