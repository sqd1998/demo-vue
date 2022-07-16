<template>
  <div>

    <!-- 路由占位符 -->
    <router-view></router-view>
    <!-- 按钮 -->

    <van-tabbar route
                placeholder>
      <van-tabbar-item icon="home-o"
                       to="/">主页</van-tabbar-item>

      <van-tabbar-item icon="manager-o"
                       to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'APP'
}
</script>

<style lang="less" scoped>
</style>
