const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development', // или 'production'
  entry: './js/script.js', // Ваш входной JavaScript файл
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Путь для выходных файлов
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Путь к вашему index.html в корне проекта
    }),
  ],
  devServer: {
    static: './',
    compress: true,
    port: 9001,
    open: true, // Открывает браузер автоматически
  }
}


