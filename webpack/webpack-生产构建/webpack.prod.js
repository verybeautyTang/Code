const { merge } = require('webpack-merge')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')//代码压缩方面比较好的选择
const common = require('./webpack.common.js')

module.exports = merge(common,{
  devtool:'source-map',
  plugins: [
    new UglifyjsWebpackPlugin(),
    new UglifyjsWebpackPlugin({
      sourceMap:true
    })
  ],
  mode:'production'
})