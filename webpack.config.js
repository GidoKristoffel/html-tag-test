const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const JsonMinimizerPlugin = require("json-minimizer-webpack-plugin");

module.exports = {
  entry: {
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].[fullhash].js'
  },
  plugins: [new CompressionPlugin()],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new JsonMinimizerPlugin({
        include: /\.json/i,
      }),
    ],
  },
};
