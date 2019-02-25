import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login/index.vue'
import Home from '@/view/home/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录',
      }
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            title: '主页',
        }
    },
  ],
})
