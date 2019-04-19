const options = require('./webpack.config');
const webpack = require('webpack');
const compiler = webpack(options);
compiler.run(() => {
  console.log('compiler OK!');
})