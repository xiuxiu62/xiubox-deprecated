import {
	AppBar,
	Toolbar,
	IconButton,
	Button,
	Grid,
	Link,
	Box,
} from '@material-ui/core';
import { Logo, MenuIcon } from '../svgs';

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
						Books
					</Button>
				}
			/>
			<NavLink
				to="/users"
				children={
					<Button
						color="inherit"
						style={{ paddingLeft: p, paddingRight: p }}
					>
						Users
					</Button>
				}
			/>
			<NavLink
				to="/todos"
				children={
					<Button
						color="inherit"
						style={{ paddingLeft: p, paddingRight: p }}
					>
						Todos
					</Button>
				}
			/>
		</div>
	);
};

//TODO: move into api client
const ensureAuthenticated = (): boolean => false;

const AuthenticationButton = () => {
	const authenticated: boolean = ensureAuthenticated();

	if (authenticated) {
		return (
			<NavLink
				to="/logout"
				children={<Button color="inherit">Logout</Button>}
			/>
		);
	}

	return (
		<NavLink
			to="/login"
			children={<Button color="inherit">Login</Button>}
		/>
	);
};

const Header = () => (
	<AppBar position="static" color="secondary">
		<Toolbar>
			<Grid container justify="flex-start" alignItems="center">
				<IconButton edge="start" color="inherit" aria-label="menu">
					<MenuIcon />
				</IconButton>
				<Box style={{ marginLeft: '1rem' }}>
					<NavLink to="/" children={<Logo />} />
				</Box>
			</Grid>
			<Grid container justify="center">
				<RedirectButtons />
			</Grid>
			<Grid container justify="flex-end">
				<AuthenticationButton />
			</Grid>
		</Toolbar>
	</AppBar>
);

export { Header };
