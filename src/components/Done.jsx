import React from 'react';
import { Provider, connect } from 'react-redux';
import { Table } from 'antd';
import store from '../stores/app';
import style from '../styles/app.css';


class Done extends React.Component {
	columns = [{
		title: '',
		key: 'index',
		dataIndex: 'index',
		render(text, record, index) {
			return index + 1;
		},
		width: 60,
	}, {
		title: 'Start Time',
		key: 'startTime',
		dataIndex: 'startTime',
		width: 85,
	}, {
		title: 'End Time',
		key: 'endTime',
		dataIndex: 'endTime',
		width: 85,
	}, {
		title: 'Content',
		key: 'content',
		dataIndex: 'content',
	}];

	render() {
		return (
			<Table 
				className={style['Done']}
				rowKey="uid"
				columns={this.columns} 
				dataSource={this.props.doneState} 
				locale={{emptyText: 'No Data'}}
			/>
		);
	}
}


const mapStateToProps = (state, ownProps) => ({
	doneState: state.doneModel,
});
const ConnectedComponent = connect(mapStateToProps)(Done);


export default () => (
	<Provider store={store}>
		<ConnectedComponent />
	</Provider>
);
