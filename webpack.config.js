const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  mode: "production",
  target: "web",
  entry: {
    index: "./src/index.js",
  },
  devtool: "source-map",
  devServer: {
    allowedHosts: [".preview.csb.app", "localhost"],
    // .preview.csb.app is the domain for CodeSandbox.io
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    // Must enable liveReload and watchFiles and disable hot to have Live Reload functionality
    watchFiles: ["src/**"],
    port: 3000,
    open: true,
    // hot: true,
    liveReload: true,
    compress: true,
    historyApiFallback: true,
    client: {
      progress: true,
      reconnect: true,
      overlay: {
        warnings: false,
        errors: false,
      },
    },
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
    // assetModuleFilename: "[name][ext]",
    // assetModuleFilename: "images/[hash][ext][query]",
    assetModuleFilename: "assets/[name][ext][query]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "What shows up in the browser tab",
      filename: "index.html",
      template: "./src/index.html",
      //   favicon: path.resolve(__dirname, "../icons/favicon.ico"),
      favicon: "./src/assets/favicon.ico",
    }),
    new ESLintPlugin(),
    new StylelintPlugin({
      fix: false,
      failOnError: false,
      failOnWarning: false,
    }),
  ],
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
      },
      {
        test: /\.jsx?$/,
        use: ["babel-loader", "astroturf/loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
};
