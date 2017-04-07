// webpack.config.js
var webpack = require('webpack');

module.exports = {  
  context: __dirname,
  entry:{
    app: './src/index.js'
  },
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {  
  host: '0.0.0.0',
  port: 8081,
  inline: true
	},
  module: {
    loaders: [
      
      //JS & JSX loader
      {
        test: /(\.js|.jsx)$/,
        loader: 'babel-loader',
        exclude:'/node_modules',
        query: {
          presets: ['es2015', 'stage-2', 'react']
        }
      },
      {
        test:/\.scss$/, 
        // loader:'style!css!sass', 
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ],
        exclude: /node_modules/
      }
    ]
  },

  //to uglify JS output code
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}