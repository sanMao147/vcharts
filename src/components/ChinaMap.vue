<template>
  <h2>{{ basefig.name }}</h2>
  <MyECharts
    class="chart"
    :loading="basefig.loading"
    :options="basefig.options"
    :dataEmptyFlag="basefig.dataEmptyFlag"
    :containerStyle="containerStyle"
  ></MyECharts>
</template>

<script setup>
  import { echarts } from '@/utils/useEcharts.js'
  import { onMounted, reactive, ref } from 'vue'
  import china from '@/assets/js/china.json'
  const basefig = reactive({
    loading: false,
    dataEmptyFlag: false,
    options: '',
    name: '全国各地信息统计情况'
  })
  const containerStyle = {
    wight: '62.5rem',
    height: '34.5rem'
  }
  const initCharts = () => {
    const fetchData = () =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve({
            sData: [
              {
                name: '',
                type: 'map',
                geoIndex: 0,
                label: { show: true },
                data: [
                  { name: '北京', value: 42, rukuNum: 42, chukuNum: 8 },
                  { name: '上海', value: 688, rukuNum: 688, chukuNum: 299 },
                  { name: '黑龙江', value: 7, rukuNum: 7, chukuNum: 0 }
                ]
              }
            ]
          })
        }, 1000)
      })
    // const china = 'https://geojson.cn/api/data/china.json'
    echarts.registerMap('china', china) //注册地图数据
    // 基本不变的 echarts 属性设置
    const baseOption = {
      geo: {
        map: 'china',
        zoom: 1.2,
        label: { show: true },
        itemStyle: {
          normal: {
            areaColor: 'rgba(43, 196, 243, 0.42)',
            borderColor: 'rgba(43, 196, 243, 1)',
            borderWidth: 1, //设置外层边框
            shadowBlur: 5,
            shadowOffsetY: 8,
            shadowOffsetX: 0
            // shadowColor: '#01012a'
          },
          emphasis: {
            areaColor: '#2B91B7',
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 5,
            borderWidth: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      },
      series: []
    }

    const loadECharts = () => {
      basefig.loading = true
      fetchData()
        .then(res => {
          if (res) {
            basefig.series = res.sData
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

<style lang="scss" scoped>
  .chart {
    /* margin: auto; */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    height: 1.625rem;
    line-height: 1.625rem;
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0;
  }
</style>
