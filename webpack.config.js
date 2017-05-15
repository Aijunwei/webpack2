var path = require('path');
module.exports = {
    entry: './app/index.js',
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
              loader: 'babel-loader',
              options:{
                  presets:['es2015','react']
              }
          },{
              test:/\.css$/,
              use:[{
                  loader: 'style-loader'
              },{
                  loader: 'css-loader',
                //   options:{
                //       modules:true
                //   }/*开启css-modules*/
              }]
          }
      ]
  },
  devServer:{
      compress: true,
      port: 9000
  }
}
