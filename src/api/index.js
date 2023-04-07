import { createAxiosByinterceptors } from '@/api/request'

const request = createAxiosByinterceptors({
  //   baseURL: localhost:7007,
})

//lodaing配置
export const appList = params => request.get('/app', { params, loading: true }) // 不需要默认的全局loading效果可配置loading为false关闭 loading默认为true

// 文件下载
export const exportGoods = data =>
  request.post('/export', data, {
    responseType: 'blob'
  })

//   天气
export const WeatherRequest = param => {
  request.get('https://v0.yiketianqi.com/api', { params: param })
}
