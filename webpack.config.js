const path = require('path');

const phaserModulePath = path.join(__dirname, '/node_modules/phaser-ce/')

module.exports = {
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',

  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      { test: /pixi\.js/, loader: 'expose-loader?PIXI' },
      { test: /phaser-split\.js$/, loader: 'expose-loader?Phaser' },
      { test: /p2\.js/, loader: 'expose-loader?p2' }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      'phaser-ce': path.join(phaserModulePath, 'build/custom/phaser-split.js'),
      'pixi': path.join(phaserModulePath, 'build/custom/pixi.js'),
      'p2': path.join(phaserModulePath, 'build/custom/p2.js')
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public', 'assets', 'scripts')
  },

  devServer: {
    open: true,
    publicPath: '/assets/scripts/',
    contentBase: path.join(__dirname, 'public'),
    port: 3000
  },
};
