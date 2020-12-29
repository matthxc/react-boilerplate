/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

// Try the environment variable, otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].js',
    publicPath: ASSET_PATH,
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@Actions': path.resolve(__dirname, '../src/Actions/'),
      '@Styles': path.resolve(__dirname, '../src/Styles/'),
      '@Components': path.resolve(__dirname, '../src/Components/'),
      '@Interfaces': path.resolve(__dirname, '../src/Interfaces/'),
      '@Pages': path.resolve(__dirname, '../src/Pages/'),
      '@Reducers': path.resolve(__dirname, '../src/Reducers/'),
      '@Redux': path.resolve(__dirname, '../src/Redux/'),
      '@Test': path.resolve(__dirname, '../__tests__/'),
      '@Graphql': path.resolve(__dirname, '../src/Graphql/'),
      '@Utils': path.resolve(__dirname, '../src/utils/'),
    },
  },
  plugins: [new CleanWebpackPlugin(), new ForkTsCheckerWebpackPlugin()],
};
