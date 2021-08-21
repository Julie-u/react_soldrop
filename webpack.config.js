const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	module: {
		// Truncated for clarity
	},
	plugins: [
		// Truncated for clarity
	], 
	devServer: {
		port: 8080,
		historyApiFallback: {
			index: `index.html`
		}
	}, 
	output: {
		publicPath: `auto`
	},
	resolve: {
		alias: {
			components: path.resolve(__dirname, 'src/components/'),
			css: path.resolve(__dirname, 'src/css/'),
			img: path.resolve(__dirname, 'src/img/'),
		}
	}
}
