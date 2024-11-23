// axios封装
import axios from 'axios'

// 1. 根域名配置
// 2. 超时时间
// 3. 请求拦截器 / 响应拦截器

const request = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0',
    timeout: 5000
})

// 添加请求拦截器
// 请求发送前做一些拦截 插入一些自定义配置
request.interceptors.request.use((config)=> {
    return config
  }, (error)=> {
    return Promise.reject(error)
})

// 添加响应拦截器
// 响应返回前做拦截 处理返回数据
request.interceptors.response.use((response)=> {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data
  }, (error)=> {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
})

export { request }