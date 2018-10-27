const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const util = require('util');
const fs = require('fs');

const processor = postcss([
	autoprefixer,
	cssnano({ preset: 'default' }),
]);
const fileArr = [
	'node_modules/antd/dist/antd.css',
	'src/styles/iconfont.css',
	'src/styles/global.css',
];

(async () => {
	const readFile = util.promisify(fs.readFile);
	let cssText = '';
	for (let file of fileArr) {
		let result = await readFile(file, 'utf8');
		if(typeof result !== 'string') continue;
		result = await processor.process(result);
		cssText += result.css;
	}
	cssText = cssText.replace(/https:\/\/at\.alicdn\.com\/t\/font_1463992151_360388/g, 'static/font/iconfont');
	fs.writeFileSync('dist/base.bundle.css', cssText, 'utf8');
})();
