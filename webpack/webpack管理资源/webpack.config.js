const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    filename:'bundle.js',
    path:path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test:/\.css/, // 如果是css结尾，都提供给css和style-loader
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      { // 加载图片
        test:/\.(png|jpg|syv|gif)$/,
        use:[
          'file-loader'
        ]
      },
      { // 加载字体
        test:/\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          'file-loader'
        ]
      },
      { // 加载数据
        test:/\.(csv|tsv)$/,
        use:[
          'csv-loader'
        ]
      },
      {
        test:/\.xml$/,
        use:[
          'xml-loader'
        ]
      }
    ]
  }
}