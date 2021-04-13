import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';

import { HomePage } from './home.page';
import { NotFoundPage } from './404.page';
import { BookPage, UserPage, TodoPage } from './forms';
import { Header, Footer } from 'src/shared/components';
import { theme } from '../shared/theme';

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
