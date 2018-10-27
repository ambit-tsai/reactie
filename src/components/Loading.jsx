
export default props => {
	return props.error ? (
		<div className="loading">
		Loaded fail. <a onClick={props.retry}>Retry</a>
		</div>
	) : (
		<div className="loading">Loading...</div>
	);
};
