<template>
  <BaseCharts :basefig="basefig" />
</template>

<script setup>
  import { onMounted, reactive } from 'vue'
  import { useCharts } from '@/utils/useEcharts.js'

  const basefig = reactive({
    loading: false,
    dataEmptyFlag: false,
    options: '',
    name: '人才队伍'
  })

  const initCharts = () => {
    const { myChart } = useCharts()
    const fetchData = () =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve({
            sData: [
              { name: '博士', value: 1 },
              { name: '研究生', value: 2.5 },
              { name: '本科', value: 4 },
              { name: '高级研究员', value: 1.5 },
              { name: '博士生导师', value: 0.5 },
              { name: '海外高级人才', value: 0.5 }
            ]
          })
        }, 1000)
      })

    // 基本不变的 echarts 属性设置
    const baseOption = {
      series: {}
    }
    const setSeries = data => {
      return {
        type: 'pie',
        radius: [70, 80],
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        },
        label: {
          alignTo: 'edge',
          formatter: '{name|{b}}\n{time|{d} %}',
          minMargin: 5,
          edgeDistance: 10,
          lineHeight: 20,
          rich: {
            name: {
              fontSize: 20,
              color: '#fff'
            },
            time: {
              fontSize: 16,
              color: '#999'
            }
          }
        },
        labelLine: {
          length: 15,
          length2: 0,
          maxSurfaceAngle: 80
        },
        // labelLayout: function (params) {
        //   const isLeft = params.labelRect.x < myChart.getWidth() / 2
        //   const points = params.labelLinePoints
        //   // Update the end point.
        //   points[2][0] = isLeft
        //     ? params.labelRect.x
        //     : params.labelRect.x + params.labelRect.width
        //   return {
        //     labelLinePoints: points
        //   }
        // },
        data: data
      }
    }
    const loadECharts = () => {
      basefig.loading = true
      fetchData()
        .then(res => {
          if (res) {
            baseOption.series = setSeries(res.sData)
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
