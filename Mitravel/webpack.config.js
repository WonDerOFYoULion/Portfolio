const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');

// const CssMinimizerWebpackPlugin = require ('css-minimizer-webpack-plugin');
// const TerserWebpackPlugin = require ('terser-webpack-plugin');
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {

  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: `./js/${filename('js')}`,
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'app'), 
    },

    historyApiFallback: true, 
    open: true,
    compress: true, 
    port: 3000,
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),

    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: `./css/${filename('css')}`
    })
  ],

  module: {
    rules: [
      {
        test:/\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(?:|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: `./img/${filename('[ext]')}`
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  }

}