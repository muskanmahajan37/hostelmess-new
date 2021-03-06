import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/home',
    name: 'homeRoute',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/all',
    name: 'all',
    component: () => import('../views/All.vue')
  },
  {
    path: '/byDate',
    name: 'byDate',
    component: () => import('../views/ByDate.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path:"**",
    name:"notfound",
    redirect:{name:'home'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
