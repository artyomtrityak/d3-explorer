var webpack = require('webpack'),
  path = require('path');


var webpackConfig = {
  entry: {
    app: [
      './static/javascript/index.js'
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: "pre",
        loader: "eslint-loader",
        options: {
          failOnWarning: false,
          failOnError: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
      }
    ]
  },

  output: {
    path: path.join(__dirname, '/static/build/'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:9000/static/build/'
  },

  stats: true,

  devServer: {
    port: 9000
  },

  resolve: {
    modules: [
      path.join(__dirname, 'static/javascript/'),
      path.join(__dirname, 'node_modules')
    ],

    extensions: [
      '.js'
    ],
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'eval-cheap-module-source-map'
  //devtool: 'eval'
};


module.exports = webpackConfig;