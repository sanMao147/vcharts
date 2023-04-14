<template>
  <div class="home-container">
    <div
      ref="editor"
      class="wrap"
    >
      <div class="header">
        <div class="weather">
          <span class="wea">{{ weatherData.city }}</span>
          <img :src="weatherData.imgSrc" />
          <span class="tem">{{ weatherData.tem }}°C</span>
          <span class="wea">{{ weatherData.wea }}</span>
        </div>
        <div class="brandName">区块链科技公司品牌概览</div>
        <div class="showTime">
          <span class="time">{{ timeData.nowTime }}</span>
          <span class="date">
            <span>{{ timeData.week }}</span>
            <span>{{ timeData.date }}</span>
          </span>
        </div>
      </div>
      <div class="main">
        <div class="left item">
          <Business />
          <Talent />
          <Income />
        </div>
        <div class="center item">
          <ChinaMap></ChinaMap>
        </div>
        <div class="right item">
          <WordCloud />
          <Distribution />
          <History />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { weaList } from '@/config/weather'
  import axios from 'axios'
  import dayjs from 'dayjs'
  import { onMounted, reactive, onUnmounted, ref } from 'vue'

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

  onMounted(() => {
    initTime()
    initWeather()
  })
  onUnmounted(() => {
    // clearInterval(timer)
  })
</script>

<style lang="scss" scoped>
  $h: 6.5625rem;
  .home-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    min-height: 48rem;
    .wrap {
      height: 100%;
      background: url(../../assets/img/bg.jpg) no-repeat #000;
      background-size: cover;

      .header {
        position: relative;
        height: $h;
        display: block;
        background: url(../../assets/img/head_bg.png) no-repeat top center;
        background-size: 100% 100%;
        .brandName {
          color: #7ef0ff;
          font-size: 1.875rem;
          text-align: center;
          line-height: 4.5625rem;
          letter-spacing: 1px;
        }
        .weather {
          position: absolute;
          left: 5vw;
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
          right: 5vw;
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
      .main {
        display: flex;
        flex-wrap: nowrap;
        height: calc(100% - #{$h});
        min-width: 85.375rem;
        .item {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: 100%;
        }
        .left {
          width: 26vw;
          /* height: 6.25rem; */
          /* background-color: blue; */
        }
        .center {
          flex: 1;
        }
        .right {
          width: 26vw;
          /* height: 6.25rem; */
          /* background-color: brown; */
        }
      }
    }
  }
</style>
