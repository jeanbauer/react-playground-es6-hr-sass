const PROD = JSON.parse(process.env.PROD_ENV || '0');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractCssPlugin = new ExtractTextPlugin('style.css', {
  allChunks: true
});
const ProductionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
});

const Uglify = new webpack.optimize.UglifyJsPlugin({
  compress: { warnings: true }
});

module.exports = {
  entry: './src/index.js',
  devtool: 'cheap-source-map',
  output: {
    path: './public',
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: PROD ? [
    ExtractCssPlugin,
    ProductionPlugin,
    Uglify
  ] : [
    ExtractCssPlugin
  ],

  devServer: {
    inline: true,
    port: 7777,
    contentBase: './public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  }
};
