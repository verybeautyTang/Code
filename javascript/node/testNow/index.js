const xss = require('xss')
let html = xss('<h1>你好</h1><script>alert("hello")</script>')
console.log(html);