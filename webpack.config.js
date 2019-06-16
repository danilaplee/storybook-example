/* eslint import/no-extraneous-dependencies: 0, global-require: 0 */

const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { NODE_ENV, APP_ROOT, BUNDLE_ANALYZER } = process.env;
const isProduction = NODE_ENV === 'production';

const getPostCSSPlugins = function() {
  return [
    require('postcss-import'),
    require('postcss-url')({
      url: 'rebase'
    }),
    require('postcss-mixins'),
    require('postcss-nested'),
    require('postcss-calc'),
    require('postcss-for'),
    require('postcss-each'),
    require('postcss-simple-vars')({
      silent: true
    }),
    require('postcss-custom-media'),
    require('postcss-custom-properties'),
    require('autoprefixer')({
      browsers: ['last 3 versions', 'ie 10', 'ff 24', 'android 4.2', 'ios >= 5']
    })
  ];
};

module.exports = function() {
  const plugins = [
    new webpack.DefinePlugin({
      'process.env.APP_ROOT': JSON.stringify(APP_ROOT)
    }),
    new MiniCssExtractPlugin({
      filename: 'lib.css'
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/)
  ];

  if (BUNDLE_ANALYZER) {
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerHost: 'localhost',
        analyzerPort: 8091
      })
    );
  }

  const optimization = isProduction
    ? {
        minimizer: [
          new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: false
          }),
          new OptimizeCssAssetsPlugin()
        ]
      }
    : {};

  return {
    target: 'node',
    mode: 'production',
    entry: {
      app: './src/index.js'
    },
    output: {
      filename: 'lib.js',
      path: `${__dirname}/dist/`,
      library: 'storybook-example',
      libraryTarget: 'umd'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      modules: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'node_modules')
      ]
    },
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
      classnames: 'classnames',
      'pdfjs-dist': 'pdfjs-dist',
      'react-bootstrap': 'react-bootstrap',
      'react-router-dom': 'react-router-dom'
    },
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: getPostCSSPlugins()
              }
            },
            'sass-loader',
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [
                  './src/styles/variables.scss',
                  './src/styles/mixins.scss'
                ]
              }
            }
          ]
        },
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          use: {
            loader: 'file-loader',
            options: { name: 'admin/assets/fonts/[name].[ext]' }
          }
        },
        {
          test: /\.(jpg|svg|png|gif)$/,
          use: {
            loader: 'url-loader',
            options: {
              name: 'admin/assets/images/[name].[ext]',
              progressive: true
            }
          },
          include: [path.resolve(__dirname, 'src')],
          exclude: /node_modules/
        },
        {
          test: /\.html$/,
          loader: 'html-loader?minimize=false'
        },
        {
          test: /\.pdf$/,
          loader: 'file-loader'
        }
      ]
    },
    plugins,
    optimization,
    devtool: 'none'
  };
};
