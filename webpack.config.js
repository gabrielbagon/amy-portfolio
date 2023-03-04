

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index_bundle.js",
        module: {
            rules: [
                { test: /\.(js|jsx)$/, use: "babel-loader" },
                { test: /\.css$/, use: ["style-loader", "css-loader"] },
            ]
        },
        resolve: {
            extensions: [".jsx", "..."],
          },
          mode: "development",
          plugins: [
            new HtmlWebpackPlugin({
              template: "public/index.html",
            }),
          ],
        }
}