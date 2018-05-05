var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');


module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
    { test: /\.(js)$/, use: 'babel-loader', exclude: /node_modules/},
		{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
		{test: /\.(eot|png|svg|[ot]tf|woff2?)(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader'}
    ]
  },

  plugins: [
    // new HtmlWebpackPlugin({
    //   template: 'public/app/html/index.html',
    //   filename: '../server/index.html'
    // }),
    //   new webpack.optimize.UglifyJsPlugin({
    //       compress: {
    //           screw_ie8: true, // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
    //           warnings: false,
    //       },
    //       sourceMap:true //to generate source map
    //   }),
    //   new CleanWebpackPlugin(pathsToClean, cleanOptions),
    //   new webpack.DefinePlugin({
    //       'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    //   }),
  ],
  devtool: "#source-map",
  devServer:{
    contentBase:'public',
    historyApiFallback:{
        index:'/'
    }
  }
};
