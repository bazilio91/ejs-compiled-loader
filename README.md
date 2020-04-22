# ejs-compiled-loader for webpack

EJS loader for [webpack](http://webpack.github.io/). Uses [ejs](https://github.com/mde/ejs) function to compile templates.

To use [EJS by tj](https://github.com/tj/ejs) use 1.x branch and 1.x.x versions.

## Installation

`npm install ejs-compiled-loader`

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript
var template = require("ejs-compiled-loader!./file.ejs");
// => returns the template function compiled with ejs templating engine.

// And then use it somewhere in your code
template(data) // Pass object with data

// Child Templates
// path is relative to where webpack is being run
<%- include templates/child -%>
```

## Options

Following options can be specified in query:

`beautify` — enable or disable terser beautify of template ast

`compileDebug` — see ejs compileDebug option

`htmlmin` — see [htmlminify section](#htmlminify)

## htmlminify

```javascript
module: {
  rules: [{
    test: /\.ejs$/, 
    use: {
      loader: 'ejs-compiled-loader',
      options: {
        htmlmin: true,
        htmlminOptions: {
          removeComments: true
        }
      }
    }
  }]
}
```

See [all options reference](https://github.com/kangax/html-minifier#options-quick-reference)

## License

MIT (http://www.opensource.org/licenses/mit-license.php)



