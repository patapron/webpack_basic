# webpack_basic
Empty and configured webpack project to use with whatever you want framework


## How to start

### Pre-requisites

1. Install Node & Npm

2. Create new proyect folder:
```
mkdir webpack_basic
```

3. Open new console and go to proyect folder

4. Start node proyect (essential to get package.json file):
```
npm int
```

5. Fill proyect info (you are here, xD)

6. Install dependecies:

Webpack globally if you don't have alrready
```
npm install webpack -g
```

Webpack and webpack-dev-server locally
```
npm install webpack webpack-dev-server -D
```

Babel dependecies
```
npm install babel-loader babel-core babel-preset-es2015 -D
```

Style dependecies
```
npm install sass-loader css-loader style-loader -D
npm install node-sass --save-dev

```

7. Create webpack.config.js:

```
touch webpack.config.js
```

And add within
```
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
          presets: ['es2015']
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
```

8. Create view src/index.js or jsx and add:
```
// COMPONENTS
import Message from './message';

// STYLESHEET
require('./style/style.scss')

// CONST
const STRING_TEXT = new Message('webpack basic')  

STRING_TEXT.showMessage()  
```

9. Create class src/message.js or jsx an add:
```
export default class Message {  
  
  // Call constructor
  constructor (value) {
  	// Set parameter value to own value
    this.value = value
  }

  // Create a function to show value
  showMessage () {
    console.log(`Hi! this is: ${this.value}`)
  }
}
```

10. Build release version
```
npm run build
```

10. Try to run server like (may be require admin permissions):
```
npm run start
```

10. Open sever in the browser at _localhost:8001_
