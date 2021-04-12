import { AppBar, Toolbar, Button, Grid, Link } from '@material-ui/core';

const NavLink = (props: { to: string; children: any }) => {
	const { to, children } = props;

	return (
		<Link href={to} style={{ textDecoration: 'none', color: 'white' }}>
			{children}
		</Link>
	);
};

const RedirectButtons = () => {
	const p = '1rem';

	return (
		<div>
			<NavLink
				to="/books"
				children={
					<Button
						color="inherit"
						style={{ paddingLeft: p, paddingRight: p }}
					>
						Settings
					</Button>
				}
			/>
		</div>
	);
};

const Footer = () => (
	<AppBar
		color="secondary"
		style={{
			marginLeft: '4rem',
			marginRight: '4rem',
			position: 'static',
			bottom: 0,
			left: 0,
			width: '100%',
			height: '100%',
		}}
	>
		<Toolbar>
			<Grid container justify="center">
				<RedirectButtons />
			</Grid>
		</Toolbar>
	</AppBar>
);

export { Footer };
