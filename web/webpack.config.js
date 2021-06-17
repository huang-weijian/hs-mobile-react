const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPluginAll = require("clean-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ReactRefreshTypeScript = require('react-refresh-typescript');
const path = require("path");
const colors = require("colors");
const webpack = require("webpack");
const internalIP = require("internal-ip");
const publicIP = require("public-ip");

const port = 9999;
module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    alias: {
      "@": path.join(__dirname, "src"),
      "@hs": path.join(__dirname, "../src"),
    },
    extensions: [".ts", ".tsx", ".js", "jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        loader: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    modules: false,
                    targets: {
                      browsers: ["> 1%", "last 2 versions", "not ie <= 8"],
                    },
                    // 对polyfill进行按需引入（用到Promise，只引入Promise）
                    useBuiltIns: "usage",
                  },
                ],
                "@babel/preset-react",
              ],
              // 把babel对每个文件的一些公共注入放入到一个文件中，减小文件体积
              // @babel/plugin-transform-runtime 包含了一个 polyfill
              plugins: [
                "@babel/plugin-transform-runtime",
                "@babel/plugin-transform-async-to-generator",
                require.resolve("react-refresh/babel"),
              ],
            },
          },
          {
            loader: require.resolve('ts-loader'),
            options: {
              getCustomTransformers: () => ({
                before: [ReactRefreshTypeScript()],
              }),
            },
          }
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    modules: false,
                    targets: {
                      browsers: ["> 1%", "last 2 versions", "not ie <= 8"],
                    },
                    // 对polyfill进行按需引入（用到Promise，只引入Promise）
                    useBuiltIns: "usage",
                  },
                ],
                "@babel/preset-react",
              ],
              // 把babel对每个文件的一些公共注入放入到一个文件中，减小文件体积
              // @babel/plugin-transform-runtime 包含了一个 polyfill
              plugins: [
                "@babel/plugin-transform-runtime",
                "@babel/plugin-transform-async-to-generator",
                require.resolve("react-refresh/babel"),
              ],
            },
          },
        ],
      },
      {
        test: /.css$/,
        loaders: ["style-loader", "css-loader"],
      },
      {
        test: /.(less)$/,
        loaders: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                // hs定制UI
                modifyVars: {},
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    // 使外部可以访问
    host: "0.0.0.0",
    hot: true,
    inline: true,
    hotOnly: true,
    // devServer能访问的路径
    contentBase: "./dist",
    // 是否开启压缩
    compress: true,
    port: port,
  },
  plugins: [
    // 如果你有多个 webpack 入口点， 他们都会在生成的HTML文件中的 script 标签内
    // 如果你有任何CSS assets 在webpack的输出中（例如， 利用 MiniCssExtractPlugin 提取CSS），
    // 那么这些将被包含在HTML head中的<link>标签内
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/index.html"),
      favicon: "./favicon.ico",
      // 生成在内存的html文件名
      filename: "index.html",
      // script标签位于index.html的哪个位置插入
      inject: "body",
      public: {
        path: path.join(__dirname, "public"),
      },
    }),
    new webpack.DefinePlugin({
      VERSION: "1.0.0",
    }),
    new ReactRefreshWebpackPlugin(),
    new CleanWebpackPluginAll.CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(function (percentage, msg) {
      let perMsg = percentage * 100 + "";
      console.log(
        "HS".bgBlue.white,
        " ",
        "build progress",
        ` ${perMsg}%`,
        " ",
        `${msg}`,
        " ",
        new Date().toLocaleString().blue
      );
      if (percentage == 1) {
        internalIP.v4().then((ip) => {
          console.log(`HS APP run at `.bgBlue.white, `http://${ip}:${port}`);
        });
        publicIP.v4().then((ip) => {
          console.log(`HS APP run at `.bgBlue.white, `http://${ip}:${port}`);
        });
      }
    }),
  ],
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: "all",
    },
  },
};
