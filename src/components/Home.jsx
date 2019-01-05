import { Icon } from 'antd';
import style from '../styles/app.css';


export default function Home() {
	return (
		<div className={style['Home']}>
			<div className={style['Home__content']}>
				<h3><Icon type="info-circle-o" /> Technology Stack</h3>
				<ul>
					<li>1. <b>ECMAScript 6</b></li>
					<li>2. <b>Webpack:</b> The module bundler</li>
					<li>3. <b>Babel:</b> The JavaScript compiler</li>
					<li>4. <b>ESLint:</b> The JavaScript linter</li>
					<li>5. <b>React 16:</b> Use the React-like library `anujs` instead</li>
					<li>6. <b>Reach:</b> Use the compatible version provided by `anujs`</li>
					<li>7. <b>Rematch:</b> Use the compatible version provided by `anujs`</li>
					<li>8. <b>Ant Design 1.x:</b> The React UI framework</li>
				</ul>
				<h3><Icon type="info-circle-o" /> Others</h3>
				<ul>
					<li>1. <b>ES6 Module</b> </li>
					<li>2. <b>CSS Modules</b> </li>
					<li>3. <b>Class Properties:</b> Use babel plugin to support this feature</li>
					<li>4. <b>Code Splitting:</b> Use the dynamic `import()` syntax</li>
				</ul>
			</div>
		</div>
	);
}