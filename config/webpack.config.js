const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

function resolve (dir) {
    return path.resolve(__dirname, '..', dir);
}

module.exports = {
    devServer: {
		// Enable html5mode navigation
		historyApiFallback: true,
		port: 3000
    },
    entry: {
        vendor: './src/vendor.js',
        main: './src/main.js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm.js',
			'components': resolve('src/components'),
			'container': resolve('src/container'),
			'styles': resolve('src/styles')
        }
    },
    module: {
        rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
			},
            {
                test: /\.(js)$/,
                loader: 'babel-loader',
                include: [ resolve('src') ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]',
					publicPath: '/',
                    outputPath: 'assets/'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]',
					publicPath: '/',
                    outputPath: 'assets/'
                }
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new CleanWebpackPlugin(['dist'], {
            root: resolve(''),
            verbose: true
        }),
        new FriendlyErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: [ 'vendor', 'manifest' ]
        }),
        new ChunkManifestPlugin({
            filename: 'manifest.json',
            manifestVariable: 'webpackManifest'
        }),
        // Replace Webpack hashes with md5 hashes.
        new WebpackChunkHash(),
		new FaviconsWebpackPlugin({
			logo: resolve('src/logo.png'),
			icons: {
				android: false,
				appleIcon: false,
				appleStartup: false,
				coast: false,
				favicons: true,
				firefox: false,
				opengraph: false,
				twitter: false,
				yandex: false,
				windows: false
			}
		})
    ]
};