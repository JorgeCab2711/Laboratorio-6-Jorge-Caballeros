const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require("path");
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
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