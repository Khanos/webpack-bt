var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
      "./src/scripts.js",
      "webpack/hot/dev-server",
      "webpack-dev-server/client?http://localhost:8080"
  ],
  output: {
    path: __dirname + "/dist",
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  plugins: debug ? [] :[
    new webpack.HotModuleReplacementPlugin()
    //new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
