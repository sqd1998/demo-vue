import request from '@/utils/request.js'
// 用户相关api
export const getUserListAPI = function() {
  return request.get('/user')
}
