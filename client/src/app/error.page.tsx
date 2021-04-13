const ErrorPage = (props: { error: Error }) => {
	const { error } = props;

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				position: 'absolute',
				left: '50%',
				top: '50%',
				transform: 'translate(-50%, -50%)',
			}}
		>
			<h2
				style={{
					display: 'inline-block',
					fontWeight: 'lighter',
					paddingRight: '1rem',
					borderRight: '1px solid rgba(0, 0, 0, .3)',
				}}
			>
				Error
			</h2>
			<h3
				style={{
					display: 'inline-block',
					fontWeight: 'lighter',
					paddingLeft: '1rem',
				}}
			>
				{error}
			</h3>
		</div>
	);
};

export { ErrorPage };
