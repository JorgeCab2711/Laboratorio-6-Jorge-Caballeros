const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");
var HtmlWebPackPlugin = require('html-webpack-plugin');
const { name } = require("file-loader");
module.exports = {
    mode: "development",
    entry: {
        index:"./src/index.js"
    },
    output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname,"dist")
    },
    plugins:[
        new HtmlWebPackPlugin({
            filename: 'index.html',
            template: "./index.html",
            chunks:['index']
        }),
        new HtmlWebPackPlugin({
            filename: '1B.html',
            template: "./src/1B.html",
            chunks:[]
        }),
        new HtmlWebPackPlugin({
            filename: '2A.html',
            template: "./src/2A.html",
            chunks:[]
        }),
        new HtmlWebPackPlugin({
            filename: '2B.html',
            template: "./src/2B.html",
            chunks:[]
        }),
        new HtmlWebPackPlugin({
            filename: '3A.html',
            template: "./src/3A.html",
            chunks:[]
        }),
        new HtmlWebPackPlugin({
            filename: '3B.html',
            template: "./src/3B.html",
            chunks:[]
        }),
        new HtmlWebPackPlugin({
            filename: '4A.html',
            template: "./src/4A.html",
            chunks:[]
        }),
        new HtmlWebPackPlugin({
            filename: '4B.html',
            template: "./src/4B.html",
            chunks:[]
        }),
        new HtmlWebPackPlugin({
            filename: '5A.html',
            template: "./src/5A.html",
            chunks:[]
        }),
        new HtmlWebPackPlugin({
            filename: 'bruh.html',
            template: "./src/whatJusthappened/bruh.html",
            chunks:[]
        }),
        new HtmlWebPackPlugin({
            filename: 'happened.html',
            template: "./src/whatJusthappened/happened.html",
            chunks:[]
        }),
        new HtmlWebPackPlugin({
            filename: 'what_just.html',
            template: "./src/whatJusthappened/what_just.html",
            chunks:[]
        }),
        new CleanWebpackPlugin({
            verbose: true,
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
                            publicpath:"Imagenes/"
                        }
                    }
                ]
            },
            
        ]
    }
};

