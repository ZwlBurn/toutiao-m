module.exports = {
  plugins: {
    // 这里的autoprefixer会和vue cli的冲突，所以需要注释
    // autoprefixer: {
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },
    'postcss-pxtorem': {
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*']
    }
  }
}
