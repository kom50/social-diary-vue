const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/social-diary-vue/'
    : '/'
})
// https://github.com/kom50/social-diary-vue