const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPluginAll = require("clean-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
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
              ],
            },
          },
          "ts-loader",
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
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          // 结合css-loader只能用style内嵌，需要用link引用单独css文件，要用file-loader等loader
          // 先由css-loader处理，再交由style-loader进行打包进style或link标签
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.(less)/,
        loaders: [
          // 结合css-loader只能用style内嵌，需要用link引用单独css文件，要用file-loader等loader
          // 先由css-loader处理，再交由style-loader进行打包进style或link标签
          // {loader: 'file-loader', options: {name: '[hash][name].css'}},
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
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
    // devServer能访问的路径
    contentBase: "./dist",
    // 是否开启压缩
    compress: true,
    port: 9999,
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
    new CleanWebpackPluginAll.CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: "all",
    },
  },
};
