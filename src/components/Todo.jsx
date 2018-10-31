import React from 'react';
import { Provider, connect } from 'react-redux';
import store from '../stores/app';
import style from '../styles/app.css';
import Add from './Add.jsx';
import Modify from './Modify.jsx';
import { Table, Button, message } from 'antd';


class Todo extends React.Component {
	state = {
		selectedRows: [],
		selectedRowKeys: [],
	};
	columns = [{
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
	addRef = React.createRef();
	modifyRef = React.createRef();

	render() {
		return (
			<div className={style['Todo']}>
				<Table 
					rowKey="uid"
					columns={this.columns} 
					dataSource={this.props.todoState} 
					rowSelection={this.getRowSelection()}
					locale={{emptyText: 'No Data'}}
				/>

				<div className={style['Todo__btn-group']}>
					<Button onClick={() => this.addRef.current.open()}>
						Add
					</Button>
					<Button onClick={this.onClickDoneButton.bind(this)} disabled={!this.state.selectedRows.length}>
						Done
					</Button>
					<Button onClick={this.onClickDeleteButton.bind(this)} disabled={!this.state.selectedRows.length}>
						Delete
					</Button>
					<Button onClick={() => this.modifyRef.current.open()} disabled={this.state.selectedRows.length !== 1}>
						Modify
					</Button>
				</div>

				<Add ref={this.addRef} />
				<Modify 
					ref={this.modifyRef} 
					data={this.state.selectedRows[0]} 
					onModify={this.onModify.bind(this)}
				/>
			</div>
		);
	}

	getRowSelection() {
		const component = this;
		return {
			selectedRowKeys: this.state.selectedRowKeys,
			onChange(selectedRowKeys, selectedRows) {
				component.setState({
					selectedRows,
					selectedRowKeys,
				});
			},
		};
	}

	deleteSelectedRows() {
		this.props.todoDispatch.delete(this.state.selectedRowKeys);
		this.setState({
			selectedRows: [],
			selectedRowKeys: [],
		});
	}

	onClickDoneButton() {
		this.props.doneDispatch.add(this.state.selectedRows);
		this.deleteSelectedRows();
		message.success('Turned into the done state');
	}

	onClickDeleteButton() {
		this.deleteSelectedRows();
		message.success('Deleted successfully');
	}

	onModify(rowData) {
		this.setState({ selectedRows: [rowData] });
	}
}


const mapStateToProps = (state, ownProps) => ({
	todoState: state.todoModel,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
	todoDispatch: dispatch.todoModel,
	doneDispatch: dispatch.doneModel,
});
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Todo);


export default () => (
	<Provider store={store}>
		<ConnectedComponent />
	</Provider>
);