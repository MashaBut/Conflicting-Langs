const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/modules/start.ts',
    devtool: 'inline-source-map',
    target: 'node',
    mode: 'development',
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: { hmr: process.env.NODE_ENV === 'development', },
                    },
                    'css-loader',
                ]
            },

            {
                test: /\.jpe?g$/,
                use: [{ loader: 'file-loader?name=./images/jpg/[name].[ext]' }]
            },

            {
                test: /\.gif$/,
                use: [{ loader: 'file-loader?name=./images/gif/[name].[ext]' }]
            },


            {
                test: /\.png$/,
                use: [{ loader: 'file-loader?name=./images/png/[name].[ext]' }]
            },


            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [{ loader: 'file-loader?name=./fonts/[name].[ext]' }]
            },


            {
                test: /\.wav$/,
                use: [{ loader: 'file-loader?name=./sounds/[name].[ext]' }]
            },

        ]
    },

    plugins: [
        new MiniCssExtractPlugin({ filename: 'main.css' }),
        new HtmlWebpackPlugin({
            title: 'Conflicting Lands',
            hash: false,
            template: './src/modules/ux/html/start.html',
            filename: 'index.html',
        }),
    ],

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
};