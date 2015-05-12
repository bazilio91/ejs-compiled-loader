var ejs = require('ejs'),
  uglify = require('uglify-js'),
  utils = require("loader-utils");


module.exports = function (source) {
  this.cacheable && this.cacheable();
  var opts = utils.parseQuery(this.query);
  opts.client = true;
  opts.filename = this.resourcePath;
  var template = ejs.compile(source, opts);

  var ast = uglify.parser.parse(template.toString());

  return 'module.exports = ' + uglify.uglify.gen_code(ast, {beautify: true});
};
