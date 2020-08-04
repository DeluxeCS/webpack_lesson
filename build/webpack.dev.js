const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "postcss-loader" // 将 css 编译成 postcss
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }, {
                    loader: "postcss-loader" // 将 css 编译成 postcss
                }]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader",
                    options: {
                        strictMath: true,
                        noIeCompat: true
                    }
                }]
            },
        ],
    },
    output: {
        // libery: 'lesson',
        // liberyTarget: 'umd',
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        // 非入口(non-entry) chunk 文件的名
        chunkFilename: '[name].chunk.js',
        // devtool中source-map启动
        sourceMapFilename: '[file]',
    }
}