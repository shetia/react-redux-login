const mysqlFn = require('../mysql/index')
//cnpm i -S jsonwebtoken
const jwt = require('jsonwebtoken')
const validator = require('validator')
const { isEmpty } = require('lodash')
const validatorForm = (data) => {
  let error = {}
  if (validator.isEmpty(data.username)) {
    error.username = '请输入用户名'
  }
  if (validator.isEmpty(data.password)) {
    error.password = '请输入密码'
  }
  return {
    valid: isEmpty(error),
    error
  }
}
const login = async (ctx, next) => {
  let body = ctx.request.body
  let {valid, error} = validatorForm(body) 
  if (valid){
    let sql = 'select * from userList where `username`=? AND `password`=?'
    let arr = [body.username, body.password]
    let res = await mysqlFn(sql, arr)
    console.log(res)
    if (res.length) {
      let token = jwt.sign({
        id: res[0].id,
        username: res[0].username
      }, 'jwtsecret')
      ctx.success({
        token,
        ...res
      }, '登录成功')
    } else {
      ctx.fail({
        error: {
          form: '请输入正确的账号密码'
        }
      })
    }
  } else {
    ctx.fail({
      error
    })
  }
}

module.exports = {
  'POST /api/login': login
}