/* eslint-disable prefer-template */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var config = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'main.js'
    },
    resolve: {
        root: path.resolve('src')
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.svg$/,
                loader: 'babel!react-svg?' + JSON.stringify({
                    svgo: {
                        floatPrecision: 2
                    }
                })
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
          
        })
    ],
    devServer: {
        historyApiFallback: true,
    }
};

var ExtractCSS = new ExtractTextPlugin('main.css');

    config.module.loaders.push({
        test: /\.css$/,
        loader: ExtractCSS.extract('style', 'css')
    });
    config.plugins.push(
        ExtractCSS,
        new webpack.optimize.OccurrenceOrderPlugin(true)
    );

module.exports = config;
