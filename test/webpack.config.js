module.exports = {
  entry: "./app.js",
  cache: false,
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.ejs$/, loader: require.resolve("../") + "?htmlmin"}
    ]
  },
  'ejs-compiled-loader': {
    'htmlminOptions': {
      removeComments: true
    }
  }
}
