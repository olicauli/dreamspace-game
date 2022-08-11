const path = require('path');

module.exports = 
{
    entry: './src/game.js',
    output: 
    {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
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
            loader: 'file-loader',
        }]
    }
};