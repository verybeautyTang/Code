import Vue from 'vue'
import App from './App'
import './base.css'
import store from './store'
import { Z_NEED_DICT } from 'zlib'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  store
})


new Vue({
  el:'#app',
  //  render: function msg(createElement) {
    // return createElement(App)
  // },
  render: h => h(app),
  store
})
