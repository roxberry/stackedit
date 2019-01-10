var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GOOGLE_CLIENT_ID: '"165685686964-l35lpq6v8ch1fo302kj78j97e2l2dcs5.apps.googleusercontent.com"',
  GITHUB_CLIENT_ID: '"c07c58c387ecfdaa4e76"'
})
