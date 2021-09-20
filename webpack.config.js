const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');

const config = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: {
      name: '__youxian_utils',
      type: 'umd',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
      },
    ],
  },
  externals: [{ react: 'react' }],
};

module.exports = config;
