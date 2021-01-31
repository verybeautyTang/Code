const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const app = express()
const config = require('./webpack.config')
const compier = webpack(config)
app.use(webpackDevMiddleware(compier, {
  publicPath: config.output.publicPath
}))

app.listen(3000,function () {
  console.log('Example app is listen on port 3000!\n');
})