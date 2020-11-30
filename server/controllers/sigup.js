const mysqlFn = require('../mysql')
// cnpm i -S validator lodash
const validator = require('validator')
const { isEmpty } = require('lodash')
const validatorForm = (data) => {
  let error = {}
  if (validator.isEmpty(data.username)) {
    error.username = '请输入用户名'
  }
  if (!validator.isEmail(data.email)) {
    error.email = '请输入邮箱'
  }
  if (validator.isEmpty(data.password)) {
    error.password = '请输入密码'
  }
  if (validator.isEmpty(data.password_confirm)) {
    error.password_confirm = '请确认密码'
  }
  if (!validator.equals(data.password, data.password_confirm)) {
    error.password_confirm = '两次密码不一致'
  }
  return {
    valid: isEmpty(error),
    error
  }
}
const sigup = async (ctx, next) => {
  const body = ctx.request.body
  let { valid, error } = validatorForm(body)
  if (valid) {
    let sql = 'insert into userList value (null, ?,?,?,?)'
    let arr = [body.username, body.email, body.password, body.password_confirm]
    let res = await mysqlFn(sql,arr)
    if (res) {
      ctx.success(res, '注册成功!')
    } else {
      ctx.fail('注册失败', -1)
    }
  } else {
    ctx.fail(error, -1)
  }
}

const validExist = async (ctx, next) => {
  const body = ctx.request.body
  let sql = 'select * from userList where `username`=?'
  let arr = [body.username]
  let res = await mysqlFn(sql, arr)
  if (res.length) {
    ctx.fail({
      error: {
        username: '已存在'
      }
    }, -1)
  } else {
    ctx.success(res, '可以注册')
  }
}

module.exports = {
  'POST /api/sigup': sigup,
  'POST /api/validexist': validExist
}