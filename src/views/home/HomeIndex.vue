<template>
  <div class="home-container">
    <div
      ref="editor"
      class="wrap"
    >
      <div class="top"></div>
      <MyECharts
        :loading="loading"
        :options="options"
      ></MyECharts>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  const loading = ref(false)
  const dataEmptyFlag = ref(false)
  const options = ref()
  const fetchData = () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve({
          xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          yData: [150, 230, 224, 218, 135, 147, 260]
        })
      }, 1000)
    })

  // 基本不变的 echarts 属性设置
  const baseOption = {
    xAxis: {
      type: 'category',
      data: []
    },
    yAxis: {
      type: 'value'
    },
    series: []
  }

  const loadECharts = () => {
    loading.value = true
    fetchData()
      .then(res => {
        if (res) {
          baseOption.xAxis.data = res.xData
          baseOption.series.push({
            data: res.yData,
            type: 'line'
          })
        } else {
          //没有数据显示空态
          dataEmptyFlag.value = true
        }
        // 赋值操作
        options.value = { ...baseOption }
      })
      .finally(() => {
        loading.value = false
      })
  }

  onMounted(() => {
    loadECharts()
  })
</script>

<style lang="scss" scoped>
  .home-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    .wrap {
      transform-origin: 0px 0px 0px;
      background: url('../../assets/img/bj.jpg') no-repeat;
      background-size: 100%;
      background-position: 50% 0;
      background-color: rgb(0, 0, 0);
      min-width: auto;
      width: 100%;
      min-height: auto;
      height: 100%;
      overflow: auto;
      .top {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 80px;
        background-color: transparent;
        background: url('../../assets/img/top_nav.png') no-repeat;
        background-position: 65% 0;
        border: none;
        overflow: hidden;
      }
    }
  }
</style>
