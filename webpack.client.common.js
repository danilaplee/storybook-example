const path = require('path');

// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'public/assets/')
  },
  module: {
    rules: [
      {
        test: /\.(svg|woff2?|ttf|eot)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              emitFile: false,
              name: '[name].[ext]',
              publicPath: '/webfonts'
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|src\/plugins)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
