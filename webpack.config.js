const path = require("path");

module.exports = {
  entry: {
        starter: './src/js/starter.js',
        results:'./src/js/dataFetch.js'
    },
  output: {
    path: path.resolve(__dirname, "assets/js"),
    filename: "[name].js"
  },
  devServer: {
    publicPath: '/'
  }

};