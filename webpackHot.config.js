const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React
        //'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint
        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
        './app/hotentry.js'
    ],
    output: {
      filename: 'bundle.js',
      publicPath:'/assets/',
      path: path.resolve(__dirname, 'dist')
  },
  module:{
      rules:[
          {
              test: /\.(js|jsx)$/,
              include: [
                  path.resolve(__dirname, "app")
              ],
              loader: 'babel-loader'
          },
          {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader'],
          },
      ]
  },
  devServer:{
      compress: true,
      hot: true,
      port: 9000
  },
  plugins:[
       new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
  ]
}
