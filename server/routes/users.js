const { configure } = require('@testing-library/react')
const express = require('express')
const router = express.Router()
// cnpm i --save lodash validator
const isEmpty = require('lodash/isEmpty')
const validator = require('validator')

const sqlFn = require('../mysql/index')
const validatorInput = data => {
  let error = {}
  if (validator.isEmpty(data.username)){
    error.username = '请填写用户名'
  }
  if (!validator.isEmail(data.email)) {
    error.email = '请填写邮箱'
  }
  if (validator.isEmpty(data.password)) {
    error.password = '请填写密码'
  }
  if (validator.isEmpty(data.passwordConfirmation)) {
    error.passwordConfirmation = '请确认密码'
  }
  if (!validator.equals(data.password, data.passwordConfirmation)) {
    error.passwordConfirmation = '两次密码不同'
  }
  return {
    error,
    isValid: isEmpty(error)
  }
}
router.post('/', (req, res) => {
  console.log(req.body)
  let body = req.body
  const {error, isValid} = validatorInput(req.body)
  var sql = 'insert into user value (null, ?, ?, ?, ?)'
  var arr = [body.username, body.password, body.passwordConfirmation, body.email]
  if (isValid) {
    sqlFn(sql, arr, (data) => {
      if (data) {
        res.send({
          success: true,
          msg: 'signup Ok'
        })
      } else {
        res.status(400).json({
          error: '注册失败'
        })
      }
    })
  } else {
    res.status(400).json(error)
  }
})

router.get('/:username', (req, res) => {
  var sql = 'select * from user where `username`=?'
  var arr = [req.params.username]
  sqlFn(sql, arr, (data) => {
    if(data) {
      res.send(data)
    } else {
      res.send({})
    }
  })
})

module.exports = router