<template>
  <div class="home-container">
    <van-nav-bar title="黑马头条"
                 placeholder />

    <van-pull-refresh v-model="isLoading"
                      @refresh="onRefresh"
                      success-text="刷新成功"
                      :disabled="finished">
      <van-list v-model="loading"
                :finished="finished"
                finished-text="我也是有底线的"
                @load="onLoad">
        <ArticleInfo v-for="item in artlist"
                     :key="item.id"
                     :title="item.title"
                     :author="item.aut_name"
                     :comment="item.comm_count"
                     :date="item.pubdate"
                     :cover="item.cover"></ArticleInfo>
      </van-list>
    </van-pull-refresh>

  </div>
</template>

<script>
//按需导入模块
import { getArticleListAPI } from '@/api/articleAPI.js'
import request from '@/utils/request.js'
import ArticleInfo from '@/components/articele/ArticleInfo.vue'

// const res = getArticleListAPI(1, 5)
// console.log(res)

export default {
  name: 'Home',
  data() {
    return {
      //页码值
      page: 1,
      //每页显示多少数据
      limit: 10,
      artlist: [],
      //是否正在加载下一页数据
      loading: true,
      //所有数据是否加载完毕
      finished: false,
      //是否正在下拉刷新
      isLoading: false
    }
  },
  methods: {
    //获取文章列表axios
    async initArticleList(isRefresh) {
      const { data: res } = await getArticleListAPI(this.page, this.limit)

      if (isRefresh) {
        //是下拉 ，新数据在前
        this.artlist = [...res, ...this.artlist]
        this.isLoading = false
      } else {
        //是上拉刷新 ，旧数据在前
        // this.artlist = [...旧数据, ...新数据]
        //
        this.artlist = [...this.artlist, ...res]
        this.loading = false
      }

      // console.log(res)旧数据在前

      if (res.length === 0) {
        this.finished = true
      }
    },
    onLoad() {
      //上拉在尾部拼接数据

      //页码值加一
      this.page++
      this.initArticleList()
    },
    onRefresh() {
      //下拉在头部拼接数据
      // console.log('触发了')
      //页码值加一
      this.page++
      //重新请求数据
      this.initArticleList(true)
    }
  },
  created() {
    this.initArticleList()
  },
  components: {
    ArticleInfo
  }
}
</script>

<style lang="less" scoped>

</style>
