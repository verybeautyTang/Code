import Vue from 'vue'
import App from './App'
import resource from 'vue-resource'
Vue.use(resource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
