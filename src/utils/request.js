import axios from 'axios'

const request = axios.create({
  baseURL: 'https://www.escook.cn'
  // baseURL: 'https://applet-base-api-t.itheima.net'
})
//默认导出axios的url
export default request
