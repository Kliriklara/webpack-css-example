const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

const sassLoaders = [
  "css-loader?modules&sourceMap&localIdentName=[local]---[hash:base64:5]",
  "autoprefixer-loader?browsers=last 2 version",
  "sass-loader?indentedSyntax=sass&includePaths[]=" + path.resolve(__dirname, "./src"),
];

const config = {
  entry: {
    app: ["./src/index"]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract("style-loader", sassLoaders.join("!")),
      },
    ]
  },
  devtools: 'sourcemap',
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./build"),
    publicPath: "/build",
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
  ],
  resolve: {
    extensions: ["", ".js", ".sass"],
    modulesDirectories: ["src", "node_modules"],
  },
};

module.exports = config;
