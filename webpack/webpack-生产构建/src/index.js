import lodash from 'lodash';

if (process.env.NODE_ENV !== 'production') {
  console.log('Look at me, we are in devolpment mode!');
} else {
  console.log('Look at me, we are in production mode!');
}
function component() {
  var element = document.createElement('div')
  element.innerHTML = lodash.join(['你好','webpack'],' ')

  return element
}
document.body.appendChild(component())