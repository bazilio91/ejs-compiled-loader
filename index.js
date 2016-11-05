var ejs = require('ejs'),
    uglify = require('uglify-js'),
    path = require('path'),
    process = require('process');


module.exports = function (source) {
  this.cacheable && this.cacheable();
  var template = ejs.compile(source, {
    client: true,
    filename: path.relative(process.cwd(), this.resourcePath)
  });

  var ast = uglify.parser.parse(template.toString());

  return 'module.exports = ' + uglify.uglify.gen_code(ast, {beautify: true});
};
