const { defineConfig } = require('@vue/cli-service')
// const { NODE_ENV } = process.env

module.exports = defineConfig({
  publicPath: '', // NODE_ENV === 'production' ? '/main-page/' : '',
  transpileDependencies: true,
  lintOnSave: false,

  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/utils.scss";'
      }
    }
  },
  pages: {
    index: {
      title: 'AWEX | Main Page',
      entry: 'src/main.js'
    }
  },
  devServer: {
    allowedHosts: 'all',
    compress: true,
    port: 3000,

    client: {
      reconnect: true
    }

    /* server: {
      type: 'https',
      options: {
        cert: './cert/server.crt',
        key: './cert/server.key',
      }
    } */
  }
})
