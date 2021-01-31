import lodash from 'lodash';
import './style.css';
import icons from "./save.jpg";
import dataXml from './data.xml'
function component() {
  var element = document.createElement('div')
  element.innerHTML = lodash.join(['你好','webpack'],' ')
  element.classList.add('hello')
  // 添加图片
  let img = new Image()
  img.src = icons
  element.appendChild(img)

  console.log(dataXml);

  return element
}
document.body.appendChild(component())