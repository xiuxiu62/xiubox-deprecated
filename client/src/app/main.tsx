import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';

import { theme } from '../shared/theme';
import { HomePage, BookPage, UserPage, TodoPage, NotFoundPage } from '.';
// import { PageWrapper } from 'src/shared/wrappers';
import { Footer, Header } from 'src/shared/components';

const Main: React.FC = () => (
	<ThemeProvider theme={theme}>
		<Header />
		<Router>
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/books" exact component={BookPage} />
				<Route path="/users" exact component={UserPage} />
				<Route path="/todos" exact component={TodoPage} />
				<Route path="*" exact component={NotFoundPage} />
			</Switch>
		</Router>
		<Footer />
	</ThemeProvider>
);

export default Main;
