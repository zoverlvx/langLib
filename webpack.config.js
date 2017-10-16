let path = require('path');
let webpack = require('webpack');
//This has to be serving something if there's a port associated to it
module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './dev/js/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
        path: 'src',
        filename: 'js/bundle.min.js'
        //publicPath: '/'
    },
    //devServer: {historyApiFallback: true},
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
