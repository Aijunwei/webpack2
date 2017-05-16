var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
      filename: 'js/bundle.js',
      publicPath:'/assets/',
      chunkFilename:'js/[id].js',
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
  externals: {
      jquery: 'jQuery',
      react:'React',
      'react-dom':'ReactDOM'
  },
  // devServer:{
  //     compress: true,
  //     port: 9000
  // },
  plugins:[
      new ExtractTextPlugin({
          filename:'css/bundle.css',
          disable:false,
          allChunks:true,
      })
  ]
}
