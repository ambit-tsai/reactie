import { Icon } from 'antd';
import style from '../styles/app.css';


export default function Home() {
	return (
		<div className={style['Home']}>
			<h2><Icon type="info-circle-o" /> Technology Stack</h2>
			<ul>
				<li>1. <b>ECMAScript 6</b></li>
				<li>2. <b>Webpack:</b> the module bundler</li>
				<li>3. <b>Babel:</b> the JavaScript compiler</li>
				<li>4. <b>ESLint:</b> the JavaScript linter</li>
				<li>5. <b>React 16:</b> use the React-like library `anujs` instead</li>
				<li>6. <b>Reach:</b> use the compatible version provided by `anujs`</li>
				<li>7. <b>Rematch:</b> use the compatible version provided by `anujs`</li>
				<li>8. <b>Ant Design 1.x:</b> the front-end component library</li>
			</ul>
			<h2><Icon type="info-circle-o" /> Others</h2>
			<ul>
				<li>1. <b>ES6 Module</b> </li>
				<li>2. <b>CSS Modules</b> </li>
				<li>3. <b>Class Properties:</b> use babel plugin to support this feature</li>
				<li>4. <b>Code Splitting:</b> use the `import()` syntax</li>
			</ul>
		</div>
	);
}