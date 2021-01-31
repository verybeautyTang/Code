import Vue from 'vue'
import App from './App'
import {Button} from 'mint-ui'
// 映射成标签
Vue.component(Button.name, Button)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
