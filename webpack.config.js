const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  cleanWebpackPlugin,
  CleanWebpackPlugin,
} = require("clean-webpack-plugin");

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
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
        //type: "asset", // now inline or output based on size
        /* // for max size of image to inline or not
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024,
          }
        }
        */
      },
      {
        test: /\.(svg)$/i,
        type: "asset/inline",
      },
      {
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
        test: /\.s?css$/i,
      },
      {
        use: { loader: "babel-loader" },
        test: /\.jsx?$/,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/images/favicon.ico",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext]",
  },
};
