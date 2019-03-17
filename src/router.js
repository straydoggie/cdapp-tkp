import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
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
      path: '/contribution',
      name: 'Contribution',
      component: () => import('./views/Contribution.vue')
    },
    {
      path: '/library',
      name: 'Library',
      component: () => import('./views/Library.vue')
    }
  ]
})