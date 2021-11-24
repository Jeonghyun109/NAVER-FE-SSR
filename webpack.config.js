const path = require("path");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  name: "renderServer",
  mode: "production",
  entry: ["./renderServer/renderServer.js"],
  output: {
    path: path.join(__dirname, "dist/"),
    filename: "renderServer.js",
    publicPath: "dist/",
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

<<<<<<< HEAD
new MiniCssExtractPlugin({
  filename: "bootstrap/dist/css/bootstrap.css",
});
=======
module.exports = [config];
>>>>>>> eb582978255879f8abfbd0a53576df5dd2de5671
