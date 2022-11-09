const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');
// const { webpack } = require("webpack");


module.exports = {
    mode: "development",

    entry:  './src/index.js',
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
        // clean: true,
        // assetModuleFilename: '[name][ext]'
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
        // compress: true,
        // historyApiFallback: true,
        // liveReload: true
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
            // future potential for scss loaders 
            {
                test: /\.css$/i,
                loader: "css-loader",
                // options: {
                //     url: true
                // }
            }
        ]
        
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Hanawilo Team Project',
            filename: 'index.html',
            template: '/src/index.html'
        }),
    ],
    // target: "web",
    
    // resolve: {
    //     extensions: [".js", ".jsx", ".json", ".ts"],
    // },
    
};