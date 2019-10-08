const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProduction = process.env.NODE_ENV === 'production'

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  mode: isProduction ? 'production' : 'development',
  context: path.resolve(__dirname, '../'),
  entry: {
    app: ['./examples/main.js', './sass/common.scss', './sass/main.scss'],
  },
  output: {
    path: resolve('../dist'),
    filename: '[name].js',
    publicPath: './',
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'xue-ui$': resolve('../index.js'),
      vue$: 'vue/dist/vue.esm.js',
    }
  },
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'common',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index-tpl.html'),
    }),
  ],
}

module.exports.module = {
  rules: [
    {
      test: /\.vue$/,
      loader: 'vue-loader',
    },
    {
      test: /\.s[ac]ss$/,
      use: [
        isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: [resolve('sass')]
            }
          }
        }
      ]
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,  // bytes
        name: path.posix.join('static', 'images/[name].[ext]'),
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,  // bytes
        name: path.posix.join('static', 'fonts/[name].[ext]'),
      }
    },
    {
      test: /\.md$/,
      use: ['html-loader', resolve('markdown-loader')]
    }
  ]
}

module.exports.devServer = {
  contentBase: [resolve('../dist')],
  publicPath: '/'
}
