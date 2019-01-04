const ENV = process.env.NODE_ENV;
const UglifyJS = require('uglify-js');
const fs = require('fs');


// Read all files to `fileMap`
const fileMap = {};
const pathList = [
	'patchs/document-head.js',
	'node_modules/es5-shim/es5-shim.js',
	// 'node_modules/es5-shim/es5-sham.js',	// Warn: `es5-sham` may cause unexpected errors 
	'node_modules/console-polyfill/index.js',
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
});
fs.writeFileSync('src/static/shim.bundle.js', result.code, 'utf8');
