const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const themePath = path.join(__dirname, './src/theme.less')
module.exports = defineConfig({
  //配置后可以打包后  本地打开
  publicPath: '/',
  transpileDependencies: true,
  lintOnSave: false,
  //关闭eslint检查
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            // 'nav-bar-background-color': '#007bff',
            // 'nav-bar-title-text-color': 'white',
            hack: `true; @import "${themePath}";`
          }
        }
      }
    }
  }
})
