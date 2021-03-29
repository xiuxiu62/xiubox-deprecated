import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box, ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import { NavBar, Temp, Footer } from './components';
import { theme } from './theme';

const Home: React.FC = () => {
	return (
		<Box>
			<NavBar />
			<Temp />
			<Footer />
		</Box>
	);
};

const Main: React.FC = () => (
	<ChakraProvider>
		<ColorModeScript initialColorMode={theme.config.initialColorMode} />
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
			</Switch>
		</Router>
	</ChakraProvider>
);

export default Main;
