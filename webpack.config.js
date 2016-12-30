require("webpack/lib/optimize/CommonsChunkPlugin");

var path = require('path');

var webpack = require('webpack');

var TimestampWebpackPlugin = require('timestamp-webpack-plugin');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('util.js');

module.exports = {
	context: path.resolve('js'),
	entry: {
		overview: './overview_page.js',
		products: './products_page.js',
		contactus: './contactus_page.js',
		index: './index_page.js'
	},
	output: {
		path: path.resolve('build/'),
		publicPath: '/public/assets/',
		filename: "[name].js"
	},
	plugins: [
		commonsPlugin,
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery",
		}),
		new TimestampWebpackPlugin({
			path: __dirname,
			filename: 'timestamp.json'
		}),
		new webpack.BannerPlugin("*****************\nwebpack generated file\nauthor:arjun@lifetripz.com\n*****************\n")
	],
	devServer: {
		contentBase: 'public'
	},
	module: {
		loaders: [
			{
				test: /\.(es6|js)$/,
				exclude: /node_modules/,
				loader: "babel-loader/"
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader"	
			},
			{ 
				test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
				exclude: /node_modules/,
				loader: 'url-loader?limit=10000'
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.es6', '.css']
	},
	watch: true
}