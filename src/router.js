import Vue from 'vue'
import Router from 'vue-router'

//import Home from './views/Home.vue'
//component: () => import('./views/About.vue')

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/library',
      name: 'Library',
      component: () => import('./views/Library.vue')
    },
    {
      path: '/papers',
      name: 'Papers',
      component: () => import('./views/Papers.vue')
    }
  ]
})