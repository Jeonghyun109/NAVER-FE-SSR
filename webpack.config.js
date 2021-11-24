module.exports = {
  mode: "development", // 1
  entry: "./src/index.js", // 2
  output: {
    // 3
    filename: "bundle.[hash].js", // 4
  },
};

new MiniCssExtractPlugin({
  filename: "bootstrap/dist/css/bootstrap.css",
});
