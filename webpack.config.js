const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    webTest: "./tests/web.ts",
  },
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'test-dist'),
    filename: "[name].js",
    path: __dirname + 'test-dist'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './tests/index.html',
    filename: 'web.html',
    chunks: ['webTest']
  })],
  devServer: {
    contentBase: './test-dist',
    publicPath: '/test-dist',
    open: true,
    hot: true,

  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: "ts-loader",
      exclude: [
        /node_modules/,
        /\.d\.ts$/
      ],
      options: {
        transpileOnly: true,
        experimentalWatchApi: true,
      }
    }, ]
  },
  optimization: {
    runtimeChunk: true,
  }
};
