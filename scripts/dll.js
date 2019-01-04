const ENV = process.env.NODE_ENV;
const path = require('path');
const ROOT = path.resolve(__dirname, '../');
const DllPlugin = require('webpack').DllPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
	mode: ENV || 'production',
	devtool: ENV === 'development' ? 'source-map' : undefined,
	context: ROOT,
	entry: {
		'base': [
			'react',
			'react-dom',
			'prop-types',
			'create-react-class',
			'@reach/router',
			'react-loadable',
			'redux',
			'@rematch/core',
			'react-redux',
			'antd',
		],
	},
	output: {
		path: `${ROOT}/src/static`,
		filename: '[name].dll.js',
		library: '_React_DLL_[name]',
	},
	resolve: {
		alias: {
			'react': 'anujs/dist/ReactIE',
			'react-dom': 'anujs/dist/ReactIE',
			'create-react-class': 'anujs/lib/createClass',
			'prop-types': 'anujs/lib/ReactPropTypes',
			'@reach/router': `${ROOT}/patchs/Router`,
			'redux': `${ROOT}/patchs/redux`,
			'symbol-observable': `${ROOT}/patchs/symbol-observable`,
			'@rematch/core': 'anujs/dist/Rematch',
			'antd': `${ROOT}/patchs/antd`,
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
							modules: 'commonjs'
						}],
					],
				},
			},
		}],
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					ie8: true,
					toplevel: false,
				},
			}),
		],
	},
	plugins: [
		new DllPlugin({
			name: '_React_DLL_[name]',
			path: `${ROOT}/src/[name].manifest.json`,
		}),
		new UglifyJsPlugin({	// development
			uglifyOptions: {
				ie8: true,
				compress: false,
				mangle: false,
				output: {
					beautify: true,
				},
			},
		}),
	],
};
