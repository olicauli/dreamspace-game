const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = 
{
    entry: './src/game.js',
    mode: 'development',
    plugins: 
    [
        new HtmlWebpackPlugin({
            title: 'halospace',
        }),
    ],
    output: 
    {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        //publicPath: '/assets/',
        clean: true,
    },
    module: 
    {
        rules: 
        [{
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(mp3|wav)/,
            type: 'asset/resource',
        }],
    }
};