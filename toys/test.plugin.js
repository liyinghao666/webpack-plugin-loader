const test = function(){};
test.prototype.apply = function (compiler) {
  compiler.hooks.emit.tap('emit', (stats) => {
    console.log('emit plugin test is runing');
  })
}
module.exports =  test;