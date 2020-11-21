const express = require('express')
const app = express()
const users = require('./routes/users')
const auth = require('./routes/auth')
// 安装nodemon 实时编译
const debug = require('debug')("my-application")
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use('/api/users', users)
app.use('/api/auth', auth)
app.listen(3030, (req, res) => {
  console.log('listening  http://localhost:3030')
  debug('更新')
})