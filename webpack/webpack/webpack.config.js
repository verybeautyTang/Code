const path = require('path')
// const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    index:'./src/index.js',
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'code Spliting'
    })
  ],
  output: {
    filename:'bundle.js',
    path:path.resolve(__dirname, 'dist')
  },
}