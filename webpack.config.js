const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {

  entry:  './client/index.tsx',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    })
  ],

  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', ["@babel/preset-react", {"runtime": "automatic"}], '@babel/preset-typescript']
            }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ["file-loader"],
      },
    ]
  },
  devServer: {
    static: {
      publicPath: '/dist',
      directory: path.resolve(__dirname, 'dist')
    },
    proxy: {
      '/api': 'http://localhost:3000',
    }
  },
  resolve: {
    fallback: {
      "fs": false
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.react.js'],
},
}