require('./check-versions')()
var config = require('../config')
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var opn = require('opn')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

var request = require('request')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()


//设置mook数据的路由

var AK = '9m4elwN8FECNzS6aGwAwaFIsWW7qbSks'

/*
*
* Place API 是一类简单的接口，用于返回查询某个区域的某类POI数据，且提供单个POI的详情查询服务，用户可以使用C#、C++、Java等开发语言发送请求且接收json、xml的数据。Place API 已全面支持HTTP/HTTPS两种请求形式。后文介绍中以HTTP请求为例。
*
*
* Place API 提供区域检索POI服务与POI详情服务。
 1. 区域检索POI服务提供三种区域检索方法：
 城市内检索（对应JavaScriptAPI的Search方法）
 矩形检索（对应JavaScript API的SearchInBound方法）
 圆形区域检索（对应JavaScript的SearchNearBy方法）。
 2. POI详情服务提供查询单个POI的详情信息，如好评。
*
*
* */
var url_place_detail = 'http://api.map.baidu.com/place/v2/detail?uid=5a8fb739999a70a54207c130&output=json&scope=2&ak=' + AK
//
// var apiRoutes = express.Router();
//
// apiRoutes.get('/charts', function (req, res) {
//     let result = ''
//     const URL = 'http://localhost:3030/data'
//     request(URL, function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             result = JSON.parse(body)
//             res.json({
//                 data: result
//             })
//         }
//     })
// });
//
// apiRoutes.get('/detail', function (req, res) {
//     let result
//     request(url_place_detail, function (error, response, body) {
//         if(!error && response.statusCode == 200){
//             result = JSON.parse(body)
//             res.json({
//                 data:result
//             })
//         }
//     })
// })
//
//
// //express 加载路由插件
// app.use('/api', apiRoutes);
//

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({action: 'reload'})
        cb()
    })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
    var options = proxyTable[context]
    if (typeof options === 'string') {
        options = {target: options}
    }
    app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    }
    var uri = 'http://localhost:' + port
    console.log('Listening at ' + uri + '\n')

    // when env is testing, don't need open it
    if (process.env.NODE_ENV !== 'testing') {
        opn(uri)
    }
})
