/*
 * @Author: wohool
 * @Date: 2023-04-03 16:47:51
 * @LastEditors: wohool
 * @LastEditTime: 2023-04-03 17:59:12
 * @FilePath: \webgis-demo\src\main.js
 * @Description:
 *
 * Copyright (c) 2023 by sanMao147----charlielin007@outlook.com, All Rights Reserved.
 */
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import 'normalize.css'
import 'cesium/Source/Widgets/widgets.css'
// Cesium.Ion.defaultAccessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1MjhiOTdhYS0yZmVlLTQ2ODgtOTYxYS0yZDI0YmEzZGJjMGIiLCJpZCI6MTMxNjQyLCJpYXQiOjE2ODAzMzA1MTF9.rELwhuS7TcPt68BeIXzVr0RGE-u0GUn7CmWvmcqIsLs`
createApp(App).use(router).mount('#app')
