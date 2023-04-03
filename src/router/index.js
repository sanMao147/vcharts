/*
 * @Author: wohool
 * @Date: 2023-04-03 17:54:04
 * @LastEditors: wohool
 * @LastEditTime: 2023-04-03 19:06:53
 * @FilePath: \webgis-demo\src\router\index.js
 * @Description:
 *
 * Copyright (c) 2023 by sanMao147----charlielin007@outlook.com, All Rights Reserved.
 */
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/LayoutIndex.vue'),
    redirect: '/city',
    children: []
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('@/views/ShangHai/ShangHai.vue'),
    meta: {
      title: '智慧城市',
      key: 'city'
    }
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
