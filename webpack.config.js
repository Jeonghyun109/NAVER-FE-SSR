const path = require("path");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  name: "renderServer",
  mode: "production",
  entry: ["./renderServer/renderServer.js"],
  output: {
    path: path.join(__dirname, "renderServer/built/"),
    filename: "renderServer.js",
    publicPath: "renderServer/built/",
  },
  externals: [nodeExternals()],
  plugins: [new MiniCssExtractPlugin({ filename: "style.css" })],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};

module.exports = [config];
