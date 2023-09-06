const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: {
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].[fullhash].js'
  },
  plugins: [new CompressionPlugin()],
};
