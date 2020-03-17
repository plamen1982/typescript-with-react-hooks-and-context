/**
 * target - where we would like to export the app for: it can be web, native app and so on
 * mode - what kind of mode will be like development, production, testing, and so on..
 * entry - where the code is coming from
 * output - where the compiled code should go in this case we have bundle.js that will be used from index.html
 *  path : path.resolve(__dirname, 'build') - we create a folder build in our root dir with all minified and complied code
 * resolve - webpack will omit these extensions
 */
//es5 import with require
const path = require('path');

// rules for babel, test everything with extension .tsx, but exclude all node_modules, and loaded them with babel-loader
const rules = [
  {
    test: /\.tsx?/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  }
];
/**
 *  - module.exports = {} = create this line... module.exports with empty object, module.exports means that this
 *  file will be visible to the whole app, and since webpack is written in node, we using module.exports
 */
module.exports = {
  target: 'web',
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: { rules },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    contentBase: './',
    port: 5001
  }
};
