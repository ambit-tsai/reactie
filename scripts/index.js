const path = require('path');
const ROOT = path.resolve(__dirname, '../');
const ENV = process.env.NODE_ENV;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: ENV || 'production',
	devtool: ENV === 'development' ? 'source-map' : undefined,
	context: ROOT,
	entry: './src/index.jsx',
	output: {
		path: `${ROOT}/dist`,
		filename: 'index.js',
	},
	resolve: {
		alias: {
			'react': 'anujs/dist/ReactIE',
			'react-dom': 'anujs/dist/ReactIE',
			// 'react': `${ROOT}/patch/anujs-ReactIE`,
			// 'react-dom': `${ROOT}/patch/anujs-ReactIE`,
			'create-react-class': 'anujs/lib/createClass',
			'@reach/router': 'anujs/dist/Router',
			// '@reach/router': `${ROOT}/patch/anujs-Router`,
			'redux': `${ROOT}/patchs/redux`,
			'@rematch/core': 'anujs/dist/Rematch',
		},
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
						['@babel/preset-env', {
							loose: true,
							modules: 'commonjs',
						}],
					],
					plugins: [
						['@babel/plugin-proposal-decorators', {
							decoratorsBeforeExport: false,
						}],
						['@babel/plugin-proposal-class-properties', {
							loose: true,
						}],
						['@babel/plugin-syntax-dynamic-import'],
					],
				},
			},
		}, {
			test: /\.jsx$/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
						['@babel/preset-env', {
							loose: true,
							modules: 'commonjs',
						}],
						['@babel/preset-react', {
							loose: true,
						}],
					],
					plugins: [
						['@babel/plugin-proposal-decorators', {
							decoratorsBeforeExport: false,
						}],
						['@babel/plugin-proposal-class-properties', {
							loose: true,
						}],
						['@babel/plugin-syntax-dynamic-import'],
					],
				},
			},
		}, {
			test: /\.css$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						modules: true,
						localIdentName: '[local]-_-[hash:base64]',
					},
				}
			],
		}],
	},
	optimization: {
		minimize: false,
	},
	plugins: [
		new webpack.DllReferencePlugin({
			context: ROOT,
			manifest: './dist/base.manifest.json',
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new UglifyJsPlugin({
			uglifyOptions: {
				ie8: true,
				sourceMap: ENV === 'development',
				mangle: ENV !== 'development',
				output: {
					beautify: ENV === 'development',
				},
			},
		}),
		new CopyWebpackPlugin([{
			context: ROOT,
			from: 'src/static',
			to: 'static',
		}], {}),
	],
	devServer: {
		contentBase: `${ROOT}/dist`,
	},
};
