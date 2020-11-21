// cnpm i --save http-proxy-middleware
const proxy = require('http-proxy-middleware')
console.log(proxy)
// const {createProxyMiddleware} = require("http-proxy-middleware");
//     module.exports = function(app){
//         app.use(
//             createProxyMiddleware("/api",{
//                 target:"http://localhost:3100",
//                 changeOrigin:true,
//                 pathRewrite:{
//                 // "^/api":""
//                 }
//             })
//         )
//     }
module.exports = function (app) {
  app.use(
    proxy.createProxyMiddleware('/api',{
      target: 'http://localhost:3030',
      changeOrigin: true
    })
  )
}