const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');
// const { webpack } = require("webpack");


module.exports = {
    mode: "development",

    entry:  './src/index.js',
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
    },

    devtool: "eval-cheap-source-map",

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
    ],

    target: "web",
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        },
        port: "3000",
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules:[
            {
                test: /.js|.jsx$/i,
                exclude: /node_modules/ , 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.js$|jsx/i,
                exclude: /node_modules/,
                enforce: "pre",
                use: ["source-map-loader"],
            },
            {
                test: /\.css$/i,
                loader: "css-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
        ]
        
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Hanawilo Team Project',
            filename: 'index.html',
            template: './src/index.html'
        }),
    ],
    
};