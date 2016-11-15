var path = require('path');
var webpack = require('webpack');
var PROD = JSON.parse(process.env.PROD_DEV || '0');

module.exports = {
  devtool: 'eval',
  entry: {
    "main" : "./src/app/index.js"
  },
  output: {
    path: './src/app/static/dist',
    filename: '[name].js'
  },
  externals: {
    // "react": "React",
    // "react-dom": "ReactDOM",
    "jquery": "$"
  },
  devtool: 'source-map',
  module: {
    postLoaders: [
      { loader: "transform?brfs" }
    ],
    loaders: [
          {
            test: /\.css$/,
            loader: 'style!css-loader' 
          },
          {
            test: /\.json$/,
            loader: 'json'
          },
          {
            test: /\.scss$/,
            loaders: [
                'style',
                'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                'resolve-url',
                'sass'
            ]
          },
          {
            test: /\.js?$/, 
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
          }
    ]
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    })
  ] : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    })
  ]
};
