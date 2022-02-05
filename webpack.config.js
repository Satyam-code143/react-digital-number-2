const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "examples/src/index.html"),
  filename: "./index.html",
});
console.log(htmlWebpackPlugin);
module.exports = {
  // 使用 examples/src/index.js作为项目入口，处理资源文件的依赖关系
  entry: path.join(__dirname, "examples/src/index.js"),
  output: {
    path: path.join(__dirname, "examples/dist"),
    filename: "bundle.js",
  },
  module: {
    //通过 babel-loader来编译处理 js和jsx文件
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  //通过html-webpack-plugin自动注入编译打包好的脚本文件
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    port: 3001,
  },
};
