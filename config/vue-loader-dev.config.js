const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    loaders: {
		// Instead use the following lines for HMR support.
		css: ['vue-style-loader', 'css-loader'],
		scss: ['vue-style-loader', 'css-loader', 'sass-loader']
    }
};