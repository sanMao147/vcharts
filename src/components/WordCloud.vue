<template>
  <BaseCharts :basefig="basefig" />
</template>

<script setup>
  import { wordArr } from '@/config/wordCloud'
  import 'echarts-wordcloud'
  import { onMounted, reactive } from 'vue'

  const basefig = reactive({
    loading: false,
    dataEmptyFlag: false,
    options: '',
    name: '产品热词'
  })

  const initCharts = () => {
    const fetchData = () =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve({
            sData: wordArr
          })
        }, 1000)
      })

    // 基本不变的 echarts 属性设置
    const baseOption = {
      title: {
        text: '',
        x: 'center',
        textStyle: {
          fontSize: 23
        }
      },
      backgroundColor: '',
      tooltip: {
        show: false
      },
      toolbox: {
        feature: {}
      },
      series: [
        {
          name: '',
          type: 'wordCloud',
          //size: ['9%', '99%'],
          sizeRange: [6, 66],
          //textRotation: [0, 45, 90, -45],
          rotationRange: [-45, 90],
          shape: 'circle',
          textPadding: 0,
          autoSize: {
            enable: true,
            minSize: 6
          },
          textStyle: {
            fontFamily: '微软雅黑',
            color: function () {
              return (
                'rgb(' +
                [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 150),
                  Math.round(Math.random() * 130)
                ].join(',') +
                ')'
              )
            },

            emphasis: {
              shadowBlur: 20,
              shadowColor: '#333'
            }
          },
          data: []
        }
      ]
    }

    const loadECharts = () => {
      basefig.loading = true
      fetchData()
        .then(res => {
          if (res) {
            baseOption.series[0].data = res.sData
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
