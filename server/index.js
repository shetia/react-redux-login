// const express = require('express')
// const app = express()
// const user = require('./routes/user')
// app.use('/api/user', user)
const Koa = require('koa')
const app = new Koa()
const bodyparser = require('koa-bodyparser')
const controller = require('./controller')
const routerResponse = require('./routerResponse')
app.use(routerResponse())
app.use(bodyparser())
app.use(controller())


let port = 3030
app.listen(port)
console.log(`listening http://localhost:${3030}`)