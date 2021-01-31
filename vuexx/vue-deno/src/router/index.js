
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import News from '../views/News.vue'
import Message from '../views/Message.vue'
import Detail from '../views/MessageDetail.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'news',
          component: News
        },
        {
          path: 'message',
          component: Message,
          children: [
            {
              path: '/home/message/detail:id',
              component: Detail
            }
          ]
        },
        {
          path: '',
          redirect: 'news'
        }
      ]
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]
})
