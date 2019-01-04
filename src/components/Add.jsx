import React from 'react';
import store from '../stores/app';
import Conf from './Conf.jsx';
import { Modal, message } from 'antd';


export default class Add extends React.PureComponent {
	state = {
		visible: false,
	};
	data = {};

	render() {
		return (
			<Modal
				visible={this.state.visible}
				title="Add"
				width="350px"
				maskClosable={false} 
				okText="Save"
				cancelText="Cancel"
				onOk={this.save.bind(this)}
				onCancel={this.close.bind(this)}
			>
				<Conf onChange={this.onChange.bind(this)} />
			</Modal>
		);
	}

	open() {
		this.setState({ visible: true });
	}

	close() {
		this.setState({ visible: false });
	}

	onChange(data) {
		this.data = data;
	}

	save() {
		store.dispatch.todoModel.add(this.data);
		message.success('Added successfully');
	}
}
