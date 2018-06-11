/* eslint-env node */
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
const envConfig = require('./config');
const ManifestPlugin = require('webpack-manifest-plugin');

function isVendor(module) {
  const context = module.context;

  if (typeof context !== 'string') {
    return false;
  }
  return (
    context.indexOf('node_modules') >= 0 ||
    context.indexOf('@housesimple/redux') >= 0 ||
    context.indexOf('@housesimple/react-components') >= 0
  );
}
module.exports = function webpackConfig(config) {
  const isDev = ['dev', 'test'].indexOf(config.environment) !== -1;
  // Default plugins
  const plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(isDev ? 'dev' : 'production'),
      },
      globals: JSON.stringify(envConfig[config.environment]),
    }),
    new webpack.ProvidePlugin({
      Promise: 'exports-loader?global.Promise!es6-promise',
    }),
    new ManifestPlugin({
      fileName: `manifest.${config.environment}.json`,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      minChunks: module => isVendor(module),
    }),
  ];

  // Don't uglify in dev mode.
  if (!isDev) {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
        comments: false,
        minimize: false,
      })
    );
  }

  const rules = [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      include: [path.join(process.cwd(), 'src')],
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
      },
    },
  ];

  // Only run eslint in dev mode.
  if (isDev) {
    rules.push({
      test: /\.jsx?$/,
      loaders: ['eslint-loader'],
      exclude: /node_modules/,
      include: [path.join(process.cwd(), 'src')],
      enforce: 'pre',
    });
  }

  return {
    entry: {
      bundle: ['babel-polyfill', './src/legacy.jsx'],
    },
    output: {
      path: '/legacyApp/web/js/components/aml-site/',
      filename: isDev
        ? `[name].${config.environment}.js`
        : `[name].[chunkhash].${config.environment}.js`,
      publicPath: '/js/components/aml-site/',
      sourceMapFilename: `[name].${config.environment}.js.map`,
      chunkFilename: isDev
        ? `[name].${config.environment}.js`
        : `[name].[chunkhash].${config.environment}.js`,
    },
    watchOptions: {
      poll: isDev ? 1000 : false,
    },
    resolve: {
      modules: [path.join(process.cwd(), 'src'), 'node_modules'],
      extensions: ['.js', '.jsx'],
      enforceExtension: false,
    },
    module: {
      rules,
    },
    devtool: isDev ? 'cheap-module-eval-source-map' : false,
    plugins,
  };
};
