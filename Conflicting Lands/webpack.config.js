const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/modules/Start.ts',
    devtool: 'inline-source-map',
    mode: 'development',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [
                {
                    loader : MiniCssExtractPlugin.loader,
                    options: {
                        hmr: process.env.NODE_ENV === 'development',
                      },
                } ,
                'css-loader',
            ]
        },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
            },
          },
        ],
      }
    ]
    },

    plugins: [
        new MiniCssExtractPlugin({
          filename: 'main.css'
        }),
      ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'AllCode.js',
        path: path.resolve(__dirname, 'dist')
    },
};


