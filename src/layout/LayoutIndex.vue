<!--
 * @Author: wohool
 * @Date: 2023-04-03 19:03:35
 * @LastEditors: wohool
 * @LastEditTime: 2023-04-03 19:03:49
 * @FilePath: \webgis-demo\src\layout\LayoutIndex.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by sanMao147----charlielin007@outlook.com, All Rights Reserved. 
-->
<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script setup></script>

<style lang="scss" scoped></style>
