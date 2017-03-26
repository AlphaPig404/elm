// 开发环境中的webpack配置文件
var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge') // 合并配置文件
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf') // 开发和运行时的webpack共享的配置文件
var HtmlWebpackPlugin = require('html-webpack-plugin') // 操作html的插件
var FriendlyErrors = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
// 定义热加载相关的入口文件
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

// 将后面的配置与baseWebpackConfig合并后输出
module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap }) // 处理单独的css文件
  },
  // eval-source-map is faster for development
  // 开发调试工具
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    // 处理index.html,插入编译后的css和JS文件
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrors()
  ]
})
