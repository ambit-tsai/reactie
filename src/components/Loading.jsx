
export default function Loading(props) {
	if (props.error) {
		console.error(props.error);
		return (
			<div className="loading">
				Loaded fail. <a onClick={props.retry}>Retry</a>
			</div>
		);
	} else {
		return (
			<div className="loading">Loading...</div>
		);
	}
}
