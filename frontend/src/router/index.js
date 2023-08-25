import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "store" */ '../views/AboutView.vue')
  }
  ,
  {
    path: '/store',
    name: 'store',
    component: () => import(/* webpackChunkName: "store" */ '../views/StoreView.vue')
  }
  ,
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "store" */ '../views/ContactView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "store" */ '../views/AdminView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
