module.exports = {
  entry: "./test/app.js",
  cache: false,
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.(ejs)$/,
      use: {
        loader: require.resolve('../'),
        options: {
          htmlmin: true,
          htmlminOptions: {
            removeComments: true,
          }
        },
      },
    }]
  }
  
}
