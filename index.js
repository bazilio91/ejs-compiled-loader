var ejs = require('ejs');
var path = require('path');
var merge = require('merge');
var utils = require('loader-utils');
var terser = require('terser');
var htmlmin = require('html-minifier');

module.exports = function (source) {
  this.cacheable && this.cacheable();

  // wepkack3: options
  var options = utils.getOptions(this);
  
  // merge opts from defaults,opts and query 
  var opts = merge({
    client: true,
    compileDebug: !!this.minimize,
    minimize: (typeof this.minimize === 'boolean') ? this.minimize : false,
    beautify: false,
    htmlmin: (typeof this.htmlmin === 'boolean') ? this.htmlmin : false,
    htmlminOptions: {}
  }, options);

  // minify html
  if (opts.htmlmin) source = htmlmin.minify(source, opts.htmlminOptions);

  // compile template
  var template = ejs.compile(source, merge(opts, {
    filename: path.relative(process.cwd(), this.resourcePath),
    webpack: this
  })).toString();

  // minify js with terser
  if (opts.minimize) template = terser.minify(template, { output: { beautify: opts.beautify }}).code;

  return 'module.exports = ' + template;

};
