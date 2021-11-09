const express = require('express') // commonjs 请求一个package express
const app = express() // 创建一个express application

// restful 风格的API
// get post delete

// 浏览器访问一个路径 URL+path URL 统一资源定位器 path
// 一个路由 触发 一个方法
//	http://localhost:3000/
//	req, res
//	浏览器 访问 服务器
//	req request 请求
//	res response 响应
app.get('/', function (req, res) {
	// 默认页面
	console.log(req.params)
	console.log('/' + ' 路由触发了') // nodemon
	
	res.json({title: 'Hello World'}) // res.json({title: 'Hello World'})
}) // 路由 前缀 http://localhost:3000 + '/'

app.listen(3000, ()=>{
	console.log('node.js express listening on port' + 3000)
})

//
