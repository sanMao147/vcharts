<template>
  <BaseCharts :basefig="basefig" />
</template>

<script setup>
  import { onMounted, reactive } from 'vue'

  const basefig = reactive({
    loading: false,
    dataEmptyFlag: false,
    options: '',
    name: '营收状况'
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
      grid: {
        left: '15%'
        //   right: '4%',
        //   bottom: '3%',
        //   containLabel: true
      },
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
