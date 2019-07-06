import path from 'path'
import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import HTMLWebpackTemplate from 'html-webpack-template'
import Copy from 'copy-webpack-plugin'
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

export default env => {
  const plugins = []
  plugins.push(
    new HTMLWebpackPlugin({
      template: HTMLWebpackTemplate,
      inject: false,
      title: 'React App Template',
      mobile: true,
      chunks: ['main'],
      filename: 'index.html',
    })
  )

  return {
    devtool: 'source-map',
    resolve: {
      modules: [
        path.join(__dirname, 'src'),
        path.join(__dirname, 'node_modules'),
      ],
    },
    resolveLoader: {
      modules: [path.join(__dirname, 'node_modules')],
    },
    entry: {
      main: ['./src/index.js'],
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    devServer: {
      open: true,
      historyApiFallback: true,
      hot: true,
    },
    plugins,
  }
}
