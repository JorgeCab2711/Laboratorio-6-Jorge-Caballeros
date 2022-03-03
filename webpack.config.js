const path = require("path");
var HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname,"dist")
    },
    plugins:[
        new HtmlWebPackPlugin({
        template: "./index.html",
    })],
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            }
        ]
    }

};