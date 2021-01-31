import lodash from 'lodash';
import printMe from './print';
import'./style.css';
function component() {
  var element = document.createElement('div')

  var btn = document.createElement('button')

  btn.innerHTML = 'clickMe and check the console'
  btn.onclick = printMe

  element.innerHTML = lodash.join(['你好','webpack'],' ')

  element.appendChild(btn)
  return element
}
// document.body.appendChild(component())
let element = component()
document.body.appendChild(element)


// 热替换模块

if (module.hot) {
  module.hot.accept('./print.js',function () {
    console.log('Accepting the updated printMe module');
    // printMe()
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  })
}