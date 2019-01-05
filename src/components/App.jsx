// Librarys
import React from 'react';
import Loadable from 'react-loadable';
import { Link, Router } from '@reach/router';
// Components
import Home from './Home.jsx';
import NotFound from './NotFound.jsx';
import Loading from './Loading.jsx';
import { Menu, Icon } from 'antd';
// Others
import style from '../styles/app.css';
// Async Components
const Todo = Loadable({
	loader: () => import('./Todo.jsx'),
	loading: Loading,
});
const Done = Loadable({
	loader: () => import('./Done.jsx'),
	loading: Loading,
});


export default class App extends React.Component {
	render() {
		return (
			<div>
				<Menu mode="horizontal">
					<Menu.Item key="home" className={style['App__brand']}>
						<Link to="/">Reactie</Link>
					</Menu.Item>
					<Menu.Item key="todo">
						<Link to="todo"><Icon type="bars" />Todo</Link>
					</Menu.Item>
					<Menu.Item key="done">
						<Link to="done"><Icon type="check" />Done</Link>
					</Menu.Item>
					<Menu.Item key="repo" className={style['repo']}>
						<a href="https://github.com/ambit-tsai/reactie/" target="_blank">
							<Icon type="github" />
						</a>
					</Menu.Item>
				</Menu>

				<Router mode="hash">
					<Home path="/" />
					<NotFound default />
					<Todo path="todo" />
					<Done path="done" />
				</Router>
			</div>
		);
	}
}
