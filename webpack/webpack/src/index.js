import lodash from 'lodash';

// async function getComponent() {
function component() {
  var element = document.createElement('div')
  var button = document.createElement('button')
  var br = document.createElement('br')
  button.innerHTML = 'clickMe and lookAtMe'
  element.innerHTML = lodash.join(['Hello', 'webpack'], ' ');
  element.appendChild(br)
  element.appendChild(button)
  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    const print = module.default;

    print();
  });
  return element
}
document.body.appendChild(component());
// getComponent().then(component => {
//   document.body.appendChild(component);
// })