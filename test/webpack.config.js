module.exports = {
  entry: "./app.js",
  mode: "production",
  cache: false,
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.ejs$/, 
      use: {
        loader: require.resolve("../"),
        options: {
          compileDebug: true,
          beautify: true,
          htmlmin: true,
          htmlminOptions: {
            removeComments: true
          }
        }
      }
    }]
  }
};
