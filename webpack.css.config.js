var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var values = require('postcss-modules-values');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// 多个提取实例
const extractCSS = new ExtractTextPlugin('[name].css');
const extractLESS = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    // entry:'./components.js',
    entry: {
        'button': './src/button/index.css',
        'buttonGroup': './src/buttonGroup/index.less',
    },
    output: {
        path: path.join(__dirname, 'lib/css'),
        filename: '[name].css' //出口名称
        // filename: '[name].js', // 可以打包为多个文件
        // libraryTarget: 'umd',
        // library: 'lib/components',
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: extractCSS.extract(['css-loader', 'postcss-loader'])
            },
            // {
            //     test: /\.less$/i,
            //     // use: extractLESS.extract({
            //     //     fallback: 'style-loader',
            //     //     use: ['style-loader', 'css-loader','postcss-loader','less-loader']
            //     // })
            //     use: ['style-loader', 'css-loader','less-loader']
            //     // use: extractLESS.extract(['style-loader', 'css-loader','less-loader'])
            // },
            {
                test: /\.less$/,
                use: extractLESS.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }, {
                test: /\.scss$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            //   localIdentName: '[local]_[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: 'postcss.config.js' // 这个得在项目根目录创建此文件
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.js[x]?$/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react', //此处不能用use，不知道为啥
                exclude: /node_modules/ //需要排除的目录
            },
        ]
    },
    plugins: [
        extractCSS,
        extractLESS,
        new ExtractTextPlugin({
            filename: 'style.css'
        })
    ]
}