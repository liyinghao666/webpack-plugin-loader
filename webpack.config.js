const path = require('path');
const test = require('./toys/test.plugin')
module.exports = webpackConfig = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'output.js'
  },
  module: {
    rules: [
      {
        /** 这里应用了一个插件 */
        test: /\.css$/,
        use:[
          {
            loader: path.resolve('toys/css.loader.js')
          }
        ]
      }
    ],
  },
  plugins: [
    new test()
  ]
}