const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin( {outputFormat: 'humanVerbose'});

module.exports = smp.wrap( merge(common, {
    devtool: 'eval-source-map',
    mode: 'development',
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
    },
    devServer: {
        stats: { //filters out some logging
            children: false,
            assets: false,
            chunks: false,
            warningsFilter: /System.import/,
        },
        contentBase: [path.join(__dirname, 'src/static')],
        open: false,
        port: 9900,
    }
}));