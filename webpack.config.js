const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const main = [
  './tests/web.ts'
];

module.exports = {
  context: process.cwd(), // to automatically find tsconfig.json
  entry: {
    main
  },
  output: {
    path: path.resolve(__dirname, 'test-dist'),
    filename: '[name].js',
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'tests/index.html'
    }),
  ],
  module: {
    rules: [{
      test: /.tsx?$/,
      loader: require.resolve("ts-loader"),
    }]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  devtool: 'inline-source-map',
  devServer: {
    clientLogLevel: 'warning',
    open: true,
    historyApiFallback: true,
    stats: 'errors-only'
  }
};
