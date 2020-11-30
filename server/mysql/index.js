const mysql = require('mysql')

const client = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'user'
})
client.connect((e) => {
  if(e) {
    console.log('mysql连接失败:' + e)
    return
  }
  console.log('mysql连接成功')
})

const mysqlFn = (sql, arr) => {
  return new Promise((resolve, reject) => {
    client.query(sql, arr, (err, res) => {
      if (err) {
        reject(err)
        return
      }
      resolve(res)
    })
  })
}

module.exports = mysqlFn
