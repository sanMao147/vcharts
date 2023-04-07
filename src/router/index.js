import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/LayoutIndex.vue'),
    redirect: '/login',
    children: []
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false
    },
    component: () => import('@/views/login/loginIndex.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/HomeIndex.vue'),
    meta: {
      title: '首页',
      key: 'home'
    }
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
