const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
	const config = {
		splitChunks: {
			chunks: 'all'
		}
	}

	if (isProd) {
		config.minimizer = [
			new OptimizeCssAssetWebpackPlugin(),
			new TerserWebpackPlugin()
		]
	}
	return config;
}

const plugins = () => {
	const base = [
		new HtmlWebpackPlugin({
			template: './index.html',
			minify: {
				collapseWhitespace: isProd
			}
		}),
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/favicon.ico'), to: path.resolve(__dirname, 'dist')
				}
			],
		}),
		new MiniCssExtractPlugin({
			filename: filename('css')
		})
	]

	if (isProd) {
		base.push(new BundleAnalyzerPlugin());
	}

	return base;
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: {
		main: ['@babel/polyfill', './index.js'],
		analytics: './analytics.js'
	},
	output: {
		filename: filename('js'),
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: ['.js', '.json'],
		alias: {
			'@models': path.resolve(__dirname, 'src/models'),
			'@': path.resolve(__dirname, 'src')
		}
	},
	optimization: optimization(),
	devServer: {
		port: 8080,
		hot: isDev
	},
	devtool: isDev ? 'source-map' : false,
	plugins: plugins(),
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.s[ac]ss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				use: ['file-loader']
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				use: ['file-loader']
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
}