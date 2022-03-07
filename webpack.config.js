const path = require("path");
var HtmlWebPackPlugin = require('html-webpack-plugin');
const { name } = require("file-loader");
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.[hash].js",
        path: path.resolve(__dirname,"dist")
    },
    plugins:[
        new HtmlWebPackPlugin({
            filename: 'index.html',
            template: "./index.html",
        }),

    ],
    
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(jpg\png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name:'[name].[ext]',
                            outputPath:"Imagenes/",
                            publicpaht:"Imagenes/"
                        }
                    }
                ]
            },
            
        ]
    }
};