const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    node: {
        fs: 'empty',
    },
    externals: [
        'canvas'
    ],
    entry: {
        main: './src/app/main.ts'
    },
    stats: { //filters out some logging
        children: false,
        warningsFilter: /System.import/,
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.scss'],
        alias: {
            styles: path.resolve(__dirname, 'src/styles')
        }
    },
    module: {
        rules: [
            {
                // CSS for the angular module. Angular handles the css itself per component. It needs to be a string, hence the to-string-loader at the end.
                test: /\.(scss|sass|css)$/,
                use: ['to-string-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
            },
            {
                test: /.ts$/,
                use: [
                    {loader: 'ts-loader', options: { transpileOnly: true}},
                    {loader: 'angular2-template-loader'}],
                exclude: /(node_modules|external_components)/,
            },
            {
                test: /\.js$/,
                use: [{
                    loader: 'ng-annotate-loader',
                    options: {
                        add: false,
                        map: false,
                    }
                }],
                exclude: /(node_modules|external_components)/,
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: ['src']
                    }
                },
                exclude: /node_modules|external_components/,

            },
            {
                test: /\.(pdf)$/, use: ['file-loader']
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            "window.$": 'jquery',
            jQuery: "jquery",
            "window.jQuery": "jquery",
        }),
        new CopyWebpackPlugin([
            { from: "./node_modules/ngx-extended-pdf-viewer/assets/", to: 'assets'},
            // { from: "./node_modules/ngx-extended-pdf-viewer/assets/locale", to: 'content/assets/locale' }  DOES NOT WORKwebpack
        ]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/app/index.html',
            chunks: ['main'],
        }),
    ],
    output: {
        filename: '[name].bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
    }
};
