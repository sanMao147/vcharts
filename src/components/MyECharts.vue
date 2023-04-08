<!--
 * @Author: wohool
 * @Date: 2023-04-07 14:32:40
 * @LastEditors: wohool
 * @LastEditTime: 2023-04-08 14:31:01
 * @FilePath: \vcharts\src\components\MyECharts.vue
 * @Description: 定制了图表加载态 loading; 图表数据为空时的属性 dataEmptyFlag。
    通过监听 options 的变化，更新绑定 myChart 的 option。
    注意： 组件 props 中 options 是 ref 类型，
    也就是整体赋值操作 options 才会触发组件 watch 的响应。
    这样设计可以避免深层监听 options 的变化，影响性能。
 * 
 * Copyright (c) 2023 by sanMao147----charlielin007@outlook.com, All Rights Reserved. 
-->

<template>
  <div>
    <div
      class="chart-container"
      :style="containerStyle"
    >
      <div
        v-show="dataEmptyFlag"
        class="chart-empty"
      >
        <span class="empty-title">没有符合条件的内容</span>
        <span>请修改查询条件后重试</span>
      </div>
      <div
        ref="canvasEl"
        :style="containerStyle"
      />
      <div
        v-show="loading"
        class="chart-loading"
        ><a-spin
      /></div>
    </div>
  </div>
</template>

<script setup>
  import { useCharts } from '@/utils/useEcharts.js'
  import { onMounted, watch } from 'vue'

  const props = defineProps({
    containerStyle: {
      type: Object,
      default: () => {
        return { height: '17.25rem', width: '31.25rem' }
      }
    },
    loading: false,
    options: null,
    dataEmptyFlag: false
  })

  const { myChart, canvasEl } = useCharts()

  watch(
    () => props?.options,
    cur => {
      if (myChart) {
        myChart.value.setOption(cur)
      }
    }
  )
  onMounted(() => {})
</script>

<style lang="scss" scoped>
  .gov-line-chart-name {
    color: #000000;
    font-size: 14px;
    font-weight: 500;
    height: 22px;
    line-height: 22px;
  }
  .chart-container {
    position: relative;
    width: 100%;
  }
  .chart-loading {
    align-items: center;
    background-color: #ffffff;
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1999;
  }
  .chart-empty {
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    color: #888;
    font-size: 14px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .empty-title {
    font-size: 16px;
    font-weight: 500;
    color: #000;
  }
</style>
