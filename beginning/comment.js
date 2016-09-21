var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
  'content': '一起期待下一期的课程吧',
  'cid': 8837
})

var options = {
  hostname: 'www.imooc.com',
  port: 80,
  path: '/course/docomment',
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.8',
    'Connection': 'keep-alive',
    'Content-Length': postData.length,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie': 'imooc_uuid=5c0bdc3e-0060-4b22-901b-afd635ada897; imooc_isnew_ct=1473903401; loginstate=1;, apsid=NjYWE0MDQwMDVhZTk0YTAzOTZiYmEwOTY1ZWEyNmQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjE1NzgzOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1MzA3ODQ4MzdAcXEuY29tAAAAAAAAAAAAAAAAAAAAADNjNmRjZjEzNzExZWYyOWEzYWZmNmY0YzhhYjUzMjIyl7beV5e23lc%3DYT; last_login_username=530784837%40qq.com; PHPSESSID=vg5ih5n9ia1qd7bfvvonnsrsa3; jwplayer.qualityLabel=è¶æ¸; imooc_isnew=2; cvde=57e279ea5e7cd-47; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1474291654,1474373103,1474385409,1474460139; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1474469423; IMCDNS=0',
    'Host': 'www.imooc.com',
    'Origin': 'http://www.imooc.com',
    'Referer': 'http://www.imooc.com/video/8837',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest'
  }
}

var req = http.request(options, function (res) {
  console.log('status: ' + res.statusCode)
  console.log('headers: ' + JSON.stringify(res.headers))

  res.on('data', function (chunk) {
    console.log(Buffer.isBuffer(chunk))
    console.log(typeof chunk)
  })

  res.on('end', function () {
    console.log('评论完毕')
  })
})

req.on('error', function (error) {
  console.log('error: ' + err.message)
})

req.write(postData)

req.end()
