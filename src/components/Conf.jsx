import React from 'react';
import style from '../styles/app.css';
import { DatePicker, Input, message } from 'antd';


export default class Conf extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			startTime: props.startTime,
			endTime: props.endTime,
			content: props.content,
		};
	}

	render() {
		return (
			<table className={style['Conf__table']}>
				<tr>
					<td>Start Time:</td>
					<td>
						<DatePicker 
							value={this.state.startTime} 
							onChange={this.onChangeStartTime.bind(this)} 
						/>
					</td>
				</tr>
				<tr>
					<td>End Time:</td>
					<td>
						<DatePicker 
							value={this.state.endTime} 
							onChange={this.onChangeEndTime.bind(this)} 
						/>
					</td>
				</tr>
				<tr>
					<td>Content:</td>
					<td>
						<Input 
							type="textarea" 
							rows={4}
							value={this.state.content}
							onChange={this.onChangeContent.bind(this)}
						/>
					</td>
				</tr>
			</table>
		);
	}

	onChange() {
		this.props.onChange({ ...this.state });
	}

	onChangeStartTime(date, dateStr) {
		const startTime = Date.parse(dateStr) || 0;
		const endTime = Date.parse(this.state.endTime) || 0;
		if (startTime && endTime && startTime > endTime) {
			message.warning('Start Time should not be greater than End Time');
		}
		this.setState({ startTime: dateStr }, () => this.onChange());
	}

	onChangeEndTime(date, dateStr) {
		const startTime = Date.parse(this.state.startTime) || 0;
		const endTime = Date.parse(dateStr) || 0;
		if (startTime && endTime && startTime > endTime) {
			message.warning('End Time should not be less than Start Time');
		}
		this.setState({ endTime: dateStr }, () => this.onChange());
	}

	onChangeContent(event) {
		const content = event.target.value.trim();
		if (!content) message.warning('Content should not be empty');
		this.setState({ content }, () => this.onChange());
	}
}
