const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = 
{
    entry: './src/game.js',
    mode: 'production',
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
    optimization: 
    {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    output: 
    {
        filename: 'bundle.min.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[hash][ext][query]',
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