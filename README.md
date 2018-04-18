# ejs-webpack-loader for webpack 4.x

EJS loader for [webpack](http://webpack.github.io/). Uses [ejs](https://github.com/mde/ejs) function to compile templates.

## Installation

`npm install ejs-webpack-loader`

## Config Setup examples as module loader

ejs example
```ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><%= title %></title>
</head>
<body>
    <p><%= someVar %></p>
</body>
</html>
```

webpack.config.js

``` javascript

const path = require('path');

const config = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      {
          test: /\.ejs$/,
          use: [
              {
                loader: "ejs-webpack-loader",
                options: {
                  data: {title: "New Title", someVar:"hello world"},
                  htmlmin: true
                }
              }
          ]
      }
    ]
  }
};

```

## Config Setup examples with separate extractor

``` javascript

const path = require('path');

const config = {
  entry: [
    './src/index.ejs',
    './src/main.ejs',
  ]
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
      rules: [
          {
              test: /\.ejs$/,
              use: [
                  {
                      loader: 'file-loader',
                      options: {
                          name: '[name].html',
                          context: './src/',
                          outputPath: '/'
                      }
                  },
                  {
                      loader: 'extract-loader'
                  },
                  {
                      loader: "ejs-webpack-loader",
                      {
                        data: {title: "New Title", someVar:"hello world"},
                        htmlmin: true
                      }
                  }
              ]
          }
      ]
  }
};

```

## Config Setup examples (via HtmlWebpackPlugin)

``` javascript

const path = require('path');

const config = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    ...
  },
  plugin: {
    new HtmlWebpackPlugin({
        template: '!!ejs-webpack-loader!src/index.ejs'
    })
  }
};

module.exports = config;

```

## EJS Example

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript
var template = require("ejs-compiled!./file.ejs");
// => returns the template function compiled with ejs templating engine.

// And then use it somewhere in your code
template(data) // Pass object with data

// Child Templates
// path is relative to where webpack is being run
<%- include templates/child -%>
```

## Options

Following options can be specified in query:

`beautify` — enable or disable uglify-js beautify of template ast

`compileDebug` — see ejs compileDebug option

`htmlmin` — see [htmlminify section](#htmlminify)

## htmlminify

```javascript
module: {
    rules: [
        {
            test: /\.ejs$/,
            use: [
                {
                  loader: "ejs-webpack-loader",
                  options: {
                    htmlmin: true
                  }
                }
            ]
        }
    ]
}
```

See [all options reference](https://github.com/kangax/html-minifier#options-quick-reference)

## License

MIT (http://www.opensource.org/licenses/mit-license.php)



