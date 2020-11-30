const index = async (ctx, next) => {
  ctx.response.body = `
    <h1>首页</h1>
    <form action="/api/signin" method="post">
      <p>名字: <input name="name" type="text"/></p>
      <p>密码: <input name="password" type="password"/></p>
      <p><input type="submit" value="提交"/></p>
    </form>
  `
}
const signin = async (ctx, next) => {
  let {name, password} = ctx.request.body
  if (name ==='shetia' && password==='123') {
    ctx.response.body = `<h2>欢迎您, ${name}</h2>`
  } else {
    ctx.response.body = `
      <h2>登录失败</h2>
      <p><a href="/">请重试</a></p>
    `
  }
}

module.exports = {
  'GET /': index,
  'POST /api/signin': signin
}