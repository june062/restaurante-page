const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
        watchFiles: ['src/*.html',]
    },
    /* optimization:{
        runtimeChunk: "single",
    }, */
    plugins: [
        new HtmlWebpackPlugin({
            inject: "head",
            scriptLoading: "defer",
            template: "./src/index.html"
        })
    ]
    
}