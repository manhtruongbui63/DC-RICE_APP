const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  chainWebpack: (config) => {
    config.module.rules.delete('svg')
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'vue-svg-loader'
        }
      ]
    }
  },
  transpileDependencies: ['vuetify'],
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'DC Rice'
      // favicon: 'public/logo-dgame.ico'
    }
  }
})
