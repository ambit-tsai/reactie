const ENV = process.env.NODE_ENV;
const UglifyJS = require('uglify-js');
const fs = require('fs');

const fileArr = [
	'node_modules/@babel/polyfill/dist/polyfill.js',
	'node_modules/es6-proxy-polyfill/src/es6-proxy-polyfill.js',
	'node_modules/matchmedia-polyfill/matchMedia.js',
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
	//     beautify: ENV === 'development',
	// },
});
fs.writeFileSync('dist/polyfill.bundle.js', result.code, 'utf8');
