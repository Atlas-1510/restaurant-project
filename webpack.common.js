const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html",
    })],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
        ],
    },
};