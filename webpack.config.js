const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development', 
  entry: './js/script.js', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', 
    }),
  ],
  devServer: {
    static: './',
    compress: true,
    port: 9001,
    open: true, 
  }
}


