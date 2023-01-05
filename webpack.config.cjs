const path = require('path');
const glob = require('glob');

var entries = {};

var files = glob.sync('./src/**/*.client.*', { dot: true });

for (let i = 0; i < files.length; i++) {
  const item = files[i];
  var name = path.basename(item).replace(".tsx", "").replace('.js', '').replace(".ts", "");
  entries[name] = item;
}

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',
  watch: true,
  entry: entries,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'www/dist'),
    clean: true,
  },
  devtool: "source-map",
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `vendor.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },
};
