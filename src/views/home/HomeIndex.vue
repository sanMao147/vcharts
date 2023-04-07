<template>
  <div class="home-container">
    <div
      ref="editor"
      class="wrap"
    >
      <header>
        <div class="weather">
          <span class="wea">{{ weatherData.city }}</span>
          <img :src="weatherData.imgSrc" />
          <span class="tem">{{ weatherData.tem }}°C</span>
          <span class="wea">{{ weatherData.wea }}</span>
        </div>
        <h2>区块链科技公司品牌概览</h2>
        <div class="showTime">
          <span class="time">{{ timeData.nowTime }}</span>
          <span class="date">
            <span>{{ timeData.week }}</span>
            <span>{{ timeData.date }}</span>
          </span>
        </div>
      </header>
      <MyECharts
        :loading="loading"
        :options="options"
      ></MyECharts>
    </div>
  </div>
</template>

<script setup>
  // import '@/assets/js/china'
  // import '@/assets/js/flexible'
  import { weaList } from '@/config/weather'
  import axios from 'axios'
  import dayjs from 'dayjs'
  import { ref, onMounted, reactive } from 'vue'

  const weatherData = reactive({
    tem: '',
    wea: '',
    imgSrc: '',
    city: ''
  })
  const timeData = reactive({
    nowTime: '',
    week: '',
    date: ''
  })
  const loading = ref(false)
  const dataEmptyFlag = ref(false)
  const options = ref()
  const initWeather = () => {
    // 第三方天气api接口
    axios
      .get('https://v0.yiketianqi.com/api', {
        params: {
          appid: '75677434',
          appsecret: '69ATuzUm',
          version: 'v61'
        }
      })
      .then(res => {
        if (res.data) {
          console.log(res.data)
          const result = JSON.parse(JSON.stringify(res.data))
          const { wea_img, city, tem, wea, week } = result
          weatherData.imgSrc = weaList[wea_img]
          weatherData.tem = tem
          weatherData.wea = wea
          weatherData.city = city
          timeData.week = week
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const initTime = () => {
    setInterval(() => {
      timeData.nowTime = dayjs().format('HH:mm:ss')
    }, 1000)
    timeData.date = dayjs().format('YYYY.MM.DD')
  }

  const initCharts = () => {
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
    loadECharts()
  }

  onMounted(() => {
    initCharts()
    initTime()
    initWeather()
  })
</script>

<style lang="scss" scoped>
  .home-container {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    .wrap {
      height: 100%;
      background: url(../../assets/img/bg.jpg) no-repeat #000;
      background-size: cover;
      line-height: 1.15;

      header {
        position: relative;
        height: 6.5625rem;
        background: url(../../assets/img/head_bg.png) no-repeat top center;
        background-size: 100% 100%;
        h2 {
          color: #7ef0ff;
          font-size: 1.875rem;
          text-align: center;
          line-height: 4.5625rem;
          letter-spacing: 1px;
        }
        .weather {
          position: absolute;
          left: 9.375rem;
          top: 2.5rem;
          font-size: 1.5rem;
          color: rgba(126, 240, 255, 0.7);
          img {
            width: 3.75rem;
            margin-left: 1.25rem;
          }
          span {
            display: inline-block;
          }
          .tem {
            margin: 0 1rem 0 2rem;
          }
        }
        .showTime {
          position: absolute;
          right: 10rem;
          top: 3.125rem;
          color: rgba(126, 240, 255, 0.7);
          display: flex;
          .time {
            font-size: 1.875rem;
            vertical-align: bottom;
            margin-right: 0.625rem;
          }
          .date {
            span {
              display: block;
              &:nth-child(1) {
                font-size: 1.125rem;
                text-align: right;
              }
              &:nth-child(2) {
                font-size: 1.125rem;
              }
            }
          }
        }
      }
    }
  }
</style>
