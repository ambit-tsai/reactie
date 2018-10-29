const ENV = process.env.NODE_ENV;
const UglifyJS = require('uglify-js');
const fs = require('fs');

const fileArr = [
	'node_modules/es5-shim/es5-shim.js',
	// 'node_modules/es5-shim/es5-sham.js',	// Warn: `es5-sham` may cause unexpected errors 
	'node_modules/console-polyfill/index.js',
];
const fileMap = {};
fileArr.forEach(file => {
	fileMap[`../${file}`] = fs.readFileSync(file, 'utf8');
});

const result = UglifyJS.minify(fileMap, {
	ie8: true,
	sourceMap: ENV !== 'development' ? false : {
		url: 'inline',
	},
	// The following configuration may be used when debugging in IE
	// mangle: ENV !== 'development',
	// output: {
	// 	beautify: ENV === 'development',
	// },
});
fs.writeFileSync('dist/shim.bundle.js', result.code, 'utf8');
