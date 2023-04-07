import request from '@/utils/axios'

/**
 * 天气
 */

export const weather = param => {
  return request({
    url: 'https://v0.yiketianqi.com/api',
    method: 'get',
    params: param
  })
}
