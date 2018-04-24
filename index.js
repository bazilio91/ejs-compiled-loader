var ejs = require('ejs'),
  UglifyJS = require('uglify-js'),
  utils = require('loader-utils'),
  path = require('path'),
  htmlmin = require('html-minifier'),
  merge = require('merge');


module.exports = function (source) {
  this.cacheable && this.cacheable();

  var query = typeof this.query === 'object' ? this.query : utils.parseQuery(this.query);
  var opts = merge(this.options && this.options['ejs-compiled-loader'] || {}, query);
  opts.client = true;

  // Skip compile debug for production when running with
  // webpack --optimize-minimize
  if (this.minimize && opts.compileDebug === undefined) {
    opts.compileDebug = false;
  }

  // Use filenames relative to working dir, which should be project root
  opts.filename = path.relative(process.cwd(), this.resourcePath);

  if (opts.htmlmin) {
    source = htmlmin.minify(source, opts['htmlminOptions'] || {});
  }

  var template = ejs.compile(source, opts);

  // Beautify javascript code
  if (!this.minimize && opts.beautify !== false) {
    var ast = UglifyJS.parse(template.toString());
    ast.figure_out_scope();
    template = ast.print_to_string({beautify: true});
  }

  return 'module.exports = ' + template;
};
