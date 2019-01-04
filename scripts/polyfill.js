const ENV = process.env.NODE_ENV;
const UglifyJS = require('uglify-js');
const fs = require('fs');


// Read all files to `fileMap`
const fileMap = {};
const pathList = [
	'node_modules/@babel/polyfill/dist/polyfill.js',
	'node_modules/es6-proxy-polyfill/src/es6-proxy-polyfill.js',
	'node_modules/matchmedia-polyfill/matchMedia.js',
];
pathList.forEach(path => {
	fileMap[`../${path}`] = fs.readFileSync(path, 'utf8');
});


// Merge, compress and output
const result = UglifyJS.minify(fileMap, {
	ie8: true,
	sourceMap: ENV !== 'development' ? false : {
		url: 'inline',
	},
	// The following configuration may be used when debugging in IE
	// mangle: false,
	// output: {
	// 	beautify: true,
	// },
});
fs.writeFileSync('src/static/polyfill.bundle.js', result.code, 'utf8');
