const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    // index:'./src/index.js',
    // another:'./src/another-module.js'
    //dependOn允许在模块之间共享
    index: {import: './src/index.js', dependOn: 'shared'},
    another: {import: './src/another-module.js', dependOn: 'shared'},
    shared:'lodash'
  },
  output: {
    filename:'[name].bundle.js',
    path:path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks:'all'
    }
  }
}