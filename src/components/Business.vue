<template>
  <BaseCharts :basefig="basefig" />
</template>

<script setup>
  import { onMounted, reactive } from 'vue'

  const basefig = reactive({
    loading: false,
    dataEmptyFlag: false,
    options: '',
    name: '会员分布'
  })

  const initCharts = () => {
    const fetchData = () =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve({
            yData: ['巴西', '印度尼西亚', '美国', '印度', '中国', '全球'],
            sData: [18203, 23489, 29034, 104970, 131744, 630230]
          })
        }, 1000)
      })

    // 基本不变的 echarts 属性设置
    const baseOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      color: [
        '#5470c6',
        '#91cc75',
        '#fac858',
        '#ee6666',
        '#73c0de',
        '#3ba272',
        '#fc8452',
        '#9a60b4',
        '#ea7ccc'
      ],

      yAxis: {
        type: 'category',
        data: []
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      series: []
    }

    const loadECharts = () => {
      basefig.loading = true
      fetchData()
        .then(res => {
          if (res) {
            baseOption.yAxis.data = res.yData
            baseOption.series.push({
              data: res.sData,
              type: 'bar'
            })
          } else {
            //没有数据显示空态
            basefig.dataEmptyFlag = true
          }
          // 赋值操作
          basefig.options = { ...baseOption }
        })
        .finally(() => {
          basefig.loading = false
        })
    }
    loadECharts()
  }
  onMounted(() => {
    initCharts()
  })
</script>

<style lang="scss" scoped></style>
