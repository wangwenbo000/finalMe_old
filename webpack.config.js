var webpack=require('webpack');
var ExtractTextPlugin=require("extract-text-webpack-plugin");
var ReplacePlugin=require('replace-webpack-plugin');
module.exports={
  entry: {
    admin:'./components_admin/admin.js',
    login:'./components_admin/login.js'
  },
  output: {
    path: __dirname + '/www/',
    filename: '/static/app/[name].build.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url',
        query: {
          limit: 1,
          name: '/static/fonts/' + '[name].[ext]'
        }
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '/static/img/' + '[name].[ext]'
        }
      }
    ]
  },
  devtool: 'source-map',
  babel: {
    cacheDirectory: true,
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract("css"),
      sass: ExtractTextPlugin.extract("css!sass")
    }
  },
  plugins: [
    new ExtractTextPlugin('/static/css/[name].style.css'),
    //进入生产环境
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    //后台首页
    new ReplacePlugin({
      skip: process.env.NODE_ENV==='production',
      entry: './components_admin/admin.html',
      hash: '[hash]',
      output: './view/admin/index_index.html',
      data: {
        css: '<link type="text/css" rel="stylesheet" href="static/css/admin.style.css?hash=[hash]">',
        js: '<script src="static/app/admin.build.js?hash=[hash]"></script>'
      }
    }),
    //登录页
    new ReplacePlugin({
      skip: process.env.NODE_ENV==='production',
      entry: './components_admin/login.html',
      hash: '[hash]',
      output: './view/admin/login_index.html',
      data: {
        css: '<link type="text/css" rel="stylesheet" href="/static/css/login.style.css?hash=[hash]">',
        js: '<script src="/static/app/login.build.js?hash=[hash]"></script>'
      }
    })
  ]
};