<template>
  <BaseCharts :basefig="basefig" />
</template>

<script setup>
  import { onMounted, reactive } from 'vue'

  const basefig = reactive({
    loading: false,
    dataEmptyFlag: false,
    options: '',
    name: '客户分布'
  })

  const initCharts = () => {
    const fetchData = () =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve({
            sData: [
              { value: 30, name: '北京' },
              { value: 28, name: '上海' },
              { value: 26, name: '广州' },
              { value: 24, name: '江苏' },
              { value: 22, name: '浙江' },
              { value: 20, name: '海南' },
              { value: 18, name: '四川' },
              { value: 16, name: '湖北' }
            ]
          })
        }, 1000)
      })

    // 基本不变的 echarts 属性设置
    const baseOption = {
      // title: {
      //   text: 'Nightingale Chart',
      //   subtext: 'Fake Data',
      //   left: 'center'
      // },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      /*  legend: {
        left: 'center',
        top: 'bottom',
        data: ['北京', '上海', '广州', '江苏', '浙江', '海南', '四川', '湖北']
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true }
          saveAsImage: { show: true }
        }
      }, */
      series: [
        {
          name: '全国主要客户',
          type: 'pie',
          radius: [20, 140],
          // center: ['75%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 5
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
