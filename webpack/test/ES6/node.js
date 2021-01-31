// const { rejects } = require('assert')
const fs = require('fs')
// fs.readFile('./resources/为学.md',(err, data) => {
//   if(err) throw err
//   console.log(data.toString())
// })

const p = new Promise((resolve, reject) => {
  fs.readFile('./resources/为学.md', (err,data) => {
    if(err) reject()
    resolve(data)
  })
})
p.then(value => {
  console.log(value.toString());
}, reason => {
  console.log('读取失败！！');
})
