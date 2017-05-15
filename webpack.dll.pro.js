var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    entry: './app/dllEnrty.js',
    output: {
      filename: 'js/bundle.js',
      publicPath:'/assets/',
      //chunkFilename:'js/[id].js',
      //publicPath:'',
      path: path.resolve(__dirname, 'production')
  },
  module:{
      rules:[
          {
              test: /\.(js|jsx)$/,
              include: [
                  path.resolve(__dirname, "app")
              ],
              loader: 'babel-loader',
              options:{
                  presets:['es2015','react']
              }
          },{
              test:/\.css$/,
              use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader",
              })
          }
      ]
  },
  plugins:[
      new ExtractTextPlugin({
          filename:'css/bundle.css',
          disable:false,
          allChunks:true,
      }),
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('./manifest.json'),
    }),
  ]
}
