import React from 'react';
import store from '../stores/app';
import Conf from './Conf.jsx';
import { Modal, message } from 'antd';


export default class Modify extends React.PureComponent {
	state = {
		visible: false,
	};
	data = {};

	render() {
		return !this.state.visible ? null : 
			<Modal
				title="Modify"
				width="350px"
				maskClosable={false} 
				visible={true}
				okText="Save"
				onOk={this.save.bind(this)}
				cancelText="Cancel"
				onCancel={this.close.bind(this)}
			>
				<Conf 
					startTime={this.props.data.startTime} 
					endTime={this.props.data.endTime} 
					content={this.props.data.content} 
					onChange={this.onChange.bind(this)}
				/>
			</Modal>
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
		this.data.uid = this.props.data.uid;
		store.dispatch.todoModel.modify(this.data);
		this.props.onModify({ ...this.data });
		message.success('Modified successfully');
	}
}
