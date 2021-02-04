const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const prod = process.env.NODE_ENV && process.env.NODE_ENV === "production";

module.exports = {
  mode: prod ? "production" : "development",
  target: prod ? "browserslist" : "web",
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: true,
  },
  module: {
    rules: [
      {
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
        test: /\.s?css$/i,
      },
      {
        use: { loader: "babel-loader" },
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
