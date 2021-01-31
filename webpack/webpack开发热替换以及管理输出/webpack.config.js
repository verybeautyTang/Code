const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 如果我们更改了我们的一个入口起点的名称，甚至添加了一个新的名称，会发生什么？生成的包将被重命名在一个构建中，但是我们的index.html文件仍然会引用旧的名字。我们用 HtmlWebpackPlugin 来解决这个问题。
const { CleanWebpackPlugin}  = require('clean-webpack-plugin') // 清理dist文件
const webpack = require('webpack')
module.exports = {
  entry:{
    app:'./src/index.js',
    // print:'./src/print.js'
  },
  devtool: 'inline-source-map',//将编译后的代码映射回原始源代码
  devServer:{ // 实时加载
    contentBase:'./dist',
    hot: true, // 开启热替换
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:'OutputITEM'
    }),
    // new webpack.NamedModulesPlugin(),//添加了 NamedModulesPlugin，以便更容易查看要修补(patch)的依赖
    new webpack.HotModuleReplacementPlugin()
  ],
  module:{
    rules:[{
      test:/\.css$/,
      use:[
        'style-loader',
        'css-loader',
      ]
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/'
  },
  mode:'production'
}