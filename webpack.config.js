const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'core': './src/core.js',
    'src1': './src/src1.js',
    'src2': './src/src2.js'
  },
  // devtool: 'source-map',
  module: {
    loaders: [{
      loader: 'transform-loader?hbsfy',
      test: /\.hbs$/
    }]
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  // Removing this externals config makes the build work.
  externals: (passedContext, request, callback) => {
    if (request === 'handlebars/runtime') {
      return callback(null, `require('${request}')`);
    }
    return callback();
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'core',
        minChunks: Infinity,
        // Limit the entry points that we pull modules out of so that core doesn't become huge.
        chunks: [
          'core',
          'src1',
          'src2',
        ],
      }),
  ]
}
