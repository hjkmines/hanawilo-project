const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { webpack } = require("webpack");


module.exports = {
    mode: "development",
    entry: "/src/index.js",
    
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },

    devtool: "eval-cheap-source-map",

    plugins: [
        new HTMLWebpackPlugin({
            template: '/src/index.html'
        }),
    ],

    target: "web",
    devServer: {
        port: "3000",
        static: ["./src"],
        open: true,
        hot: true,
        liveReload: true
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts"],
    },
    module: {
        rules:[
            {
                test: /.js$|jsx/,
                exclude: /node_modules/ , 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.js$|jsx/,
                enforce: "pre",
                use: ["source-map-loader"],
            },
            {
                test: /\.css$/i,
                loader: "css-loader",
                options: {
                    url: true
                }
            }
        ]
        
    },
};