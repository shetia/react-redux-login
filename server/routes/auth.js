const express = require('express');
const sqlFn = require('../mysql')
const router = express()
// cnpm i -S jsonwebtoken
const jwt = require('jsonwebtoken')
const config = require('./config')
router.post("/", (req, res) => {
  const {username, password} = req.body
  const sql = 'select * from user where `username`=? AND `password`=?'
  const arr = [username, password]
  sqlFn(sql, arr, data => {
    if(data.length > 0) {
      const token = jwt.sign({
        id: data[0].id,
        username:data[0].username,
      },config.jwtSecret)
      res.json(token)
    } else {
      res.status(401).json({errors: {form: '用户密码错误'}})
    }
  })
})
module.exports = router