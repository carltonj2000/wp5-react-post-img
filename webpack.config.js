const path = require("path");

const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode,
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        use: { loader: "babel-loader" },
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
};
