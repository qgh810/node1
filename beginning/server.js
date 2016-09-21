// 加载http模块
var http = require('http')
// 创建一个服务
http.createServer(function (req, res) { // 定义接收到请求都回调函数 这个回调函数接收两个参数  分别是req请求体和res响应体
  res.writeHead(200, {'content-Type': 'text/plain'})
  res.end('hello World\n')
}).listen(1337, '127.0.0.1')
console.log('Server running at http://127.0.0.1:1337/')
