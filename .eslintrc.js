module.exports = {
  parser: 'vue-eslint-parser',

  root: true,
  env: {
    node: true, //node环境
    es6: true, //注意es6环境使用到要加入
    browser: true //浏览器环境
  },

  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    //eslint规则...
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ]
}
