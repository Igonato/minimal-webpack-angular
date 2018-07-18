import {join, resolve} from 'path';

import * as webpack from 'webpack';

import HtmlWebpackPlugin = require('html-webpack-plugin');


let config: webpack.Configuration = {mode: 'none'};
config.entry = './src/main.ts';

config.output = {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
};

config.resolve = {
    extensions: ['.ts', '.js'],
};


config.module = {rules: [
    {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
    },
    {
        test: /\.(css|html)$/,
        loader: 'raw-loader',
        exclude: [join(__dirname, 'src', 'index.html')],
    },
    {
        // Just removing a deprecation warning, nothing to see here
        // https://github.com/angular/angular/issues/21560
        test: /@angular(\\|\/)core(\\|\/)fesm5/,
        parser: {system: true},
    },
]};


config.plugins = [
    new HtmlWebpackPlugin({
        template: './src/index.html',
    }),
    // Another deprication warning...
    // https://github.com/angular/angular/issues/11580
    new webpack.ContextReplacementPlugin(
        /@angular(\\|\/)core(\\|\/)fesm5/,
        join(__dirname, 'src'),
    ),
];


config.devServer = {
    contentBase: config.output.path,
    overlay: {
        warnings: true,
        errors: true,
    },
};

export default config;
