const fs = require('fs')
function addMapping(router, mapping){
  for(let url in mapping){
    if (url.startsWith('GET')){
      let path = url.slice(4)
      router.get(path, mapping[url])
      console.log(`register URL mapping: GET ${path}`)
    } else if (url.startsWith('POST')){
      let path = url.slice(5)
      router.post(path, mapping[url])
      console.log(`register URL mapping: POST ${path}`)
    } else {
      console.log(`invalid URL: ${url}`)
    }
  }
}

function addControllers(router, dir){
  let files = fs.readdirSync(__dirname + '/' + dir)
  let js_files = files.filter(file => file.endsWith('.js'))
  for(let file of js_files){
    console.log(`process controller: ${file}`)
    let mapping = require(`${__dirname}/${dir}/${file}`)
    addMapping(router, mapping)
  }
}

module.exports = function(dir){
  let controllers_dir = dir || 'controllers'
  const router = require('koa-router')()
  addControllers(router, controllers_dir)
  return router.routes()
}