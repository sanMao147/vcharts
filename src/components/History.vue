<template>
  <BaseCharts :basefig="basefig" />
</template>

<script setup>
  import { onMounted, reactive } from 'vue'

  const basefig = reactive({
    loading: false,
    dataEmptyFlag: false,
    options: '',
    name: '2023年月份注册会员数(千)'
  })

  const initCharts = () => {
    const fetchData = () =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve({
            xData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月']
          })
        }, 1000)
      })
    const setLink = axisData => {
      const data = axisData.map(function (item, i) {
        return Math.round(Math.random() * 1000 * (i + 1))
      })
      const links = data.map(function (item, i) {
        return {
          source: i,
          target: i + 1
        }
      })
      links.pop()
      return { links, data }
    }

    // 基本不变的 echarts 属性设置
    const baseOption = {
      // title: {
      //   text: 'Graph on Cartesian'
      // },
      tooltip: {},
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: []
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          type: 'graph',
          layout: 'none',
          coordinateSystem: 'cartesian2d',
          symbolSize: 40,
          label: {
            show: true
          },
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [4, 10],
          data: [],
          links: [],
          lineStyle: {
            color: '#2f4554'
          }
        }
      ]
    }

    const loadECharts = () => {
      basefig.loading = true
      fetchData()
        .then(res => {
          if (res) {
            baseOption.xAxis.data = res.xData
            const { links, data } = setLink(res.xData)
            baseOption.series[0].links = links
            baseOption.series[0].data = data
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
