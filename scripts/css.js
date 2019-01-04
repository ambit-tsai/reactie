const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const util = require('util');
const fs = require('fs');


const processor = postcss([	// create a new Processor instance
	autoprefixer,
	cssnano({ preset: 'default' }),
]);
const pathList = [
	'node_modules/antd/dist/antd.css',
	// 'src/styles/iconfont.css',
	'src/styles/global.css',
];
const options = {
	from: undefined,
};


(async () => {
	// Read all files to `cssText`
	let cssText = '';
	const readFile = util.promisify(fs.readFile);
	for (const path of pathList) {
		let result = await readFile(path, 'utf8');
		if(typeof result !== 'string') continue;
		result = await processor.process(result, options);
		cssText += result.css;
	}
	
	cssText = cssText.replace(/https:\/\/at\.alicdn\.com\/t\/font_1463992151_360388/g, 'font/iconfont');
	fs.writeFileSync('src/static/base.bundle.css', cssText, 'utf8');	// output
})();
