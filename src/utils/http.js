// axios总体的配置文件
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// 设置请求拦截器, 一般会进行token身份验证等
http.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))

// 设置响应拦截器, 对错误进行统一提示, token失效处理
http.interceptors.response.use(res => res.data, e => {
  return Promise.reject(e)
})

export default http