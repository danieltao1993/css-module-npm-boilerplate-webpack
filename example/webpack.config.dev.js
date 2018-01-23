var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: ['./src/index'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
    publicPath: '/public/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 
        ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]') 
      },
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react', //此处不能用use，不知道为啥
        exclude: /node_modules/ //需要排除的目录
    },
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]

};