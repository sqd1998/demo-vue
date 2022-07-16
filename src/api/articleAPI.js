import request from '@/utils/request.js'
// 文章相关api
export const getArticleListAPI = function(_page, _limit) {
  return request.get('/articles', {
    params: {
      _page: _page,
      _limit: _limit
    }
  })
}
