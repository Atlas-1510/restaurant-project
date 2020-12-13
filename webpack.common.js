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
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: "img",
                    name: '[name].[hash].[ext]',
                },
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
        ],
    },
};