const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const vueConfig = require('./vue-loader-prod.config');

function resolve (dir) {
    return path.resolve(__dirname, '..', dir);
}

module.exports = merge(require('./webpack.config'), {
    devtool: 'nosources-source-map',
    output: {
        path: resolve('dist'),
		publicPath: '/',
        filename: 'js/[name].[chunkhash:7].js',
        chunkFilename: 'js/[name].[chunkhash:7].js'
    },
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: vueConfig
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract([ 'css-loader' ])
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract([ 'css-loader', 'sass-loader' ])
			}
		]
	},
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            comments: false
        }),
        new ExtractTextPlugin('css/[name].[contenthash:7].css'),
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                discardComments: { removeAll: true }
            }
        }),
        new HtmlWebpackPlugin({
            template: resolve('src/index.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            // Necessary to consistently work with multiple chunks via CommonsChunkPlugin.
            chunksSortMode: 'dependency'
        })
    ]
});