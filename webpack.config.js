const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    home: './resources/script/script.js',
    product: './resources/script/product.js',
    "product-detail": './resources/script/product-detail.js',
    cart: './resources/script/cart.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',  
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, '.'),  
    },
    compress: true,
    port: 8080,
    open: true,  
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};
