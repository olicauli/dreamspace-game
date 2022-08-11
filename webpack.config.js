const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = 
{
    entry: './src/game.js',
    mode: 'development',
    //devtool: 'inline-source-map', //enable this when debugging
    devServer: 
    {
        static:'./dist',
    },
    plugins: 
    [
        new HtmlWebpackPlugin({
            template: 'src/index.html', //generates a new index.html based on the index.html in src
        }),
    ],
    output: 
    {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
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