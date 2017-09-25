const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    loaders: {
		// HMR doesn't support file extractions. In order to use HMR file extraction has to be disabled.
		// See vue.loader.dev.config.js for more.
		css: ExtractTextPlugin.extract({
            use: 'css-loader',
            fallback: 'vue-style-loader'
        }),
		scss:  ExtractTextPlugin.extract({
			use: [ 'css-loader', 'sass-loader' ],
			fallback: 'vue-style-loader'
		})
    }
};