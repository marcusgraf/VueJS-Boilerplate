const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const vueConfig = require('./vue-loader-dev.config');

function resolve (dir) {
    return path.resolve(__dirname, '..', dir);
}

module.exports = merge(require('./webpack.config'), {
	devServer: {
		// Enable HMR
		hot: true
	},
    devtool: 'cheap-eval-source-map',
    output: {
        path: resolve('dist'),
		publicPath: '/',
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js'
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
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.scss$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			}
		]
	},
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new HtmlWebpackPlugin({
            template: resolve('src/index.html'),
            // Necessary to consistently work with multiple chunks via CommonsChunkPlugin.
            chunksSortMode: 'dependency'
        }),
		new webpack.HotModuleReplacementPlugin()
    ]
});