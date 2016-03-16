'use strict';

var webpack = require('webpack'),
	path = require('path'),
	nodeModulesPath = path.resolve(__dirname, 'node_modules');

var config = {
    entry: "./src/index.js",
    output: {
        path: "public/js/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: [nodeModulesPath], query: { presets:['es2015', 'react'] } }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};

module.exports = config;
