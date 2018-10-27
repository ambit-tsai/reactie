// Library
import React from 'react';
import Loadable from 'react-loadable';
import { Link, Router } from '@reach/router';
// Component
import Home from './Home.jsx';
import NotFound from './NotFound.jsx';
import Loading from './Loading.jsx';
import { Menu, Icon } from 'antd';
// Others
import style from '../styles/app.css';
// Async Component
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
				<table>
					<tr>
						<td className={style['App__brand']}>
							<Link to="/">Reactie</Link>
						</td>
						<td>
							<Menu mode="horizontal">
								<Menu.Item key="todo">
									<Link to="todo"><Icon type="bars" />Todo</Link>
								</Menu.Item>
								<Menu.Item key="done">
									<Link to="done"><Icon type="check" />Done</Link>
								</Menu.Item>
							</Menu>
						</td>
					</tr>
				</table>

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
