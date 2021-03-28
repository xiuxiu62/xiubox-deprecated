import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider, extendTheme, Center } from '@chakra-ui/react';

const colors = {
	primary: {
		black: '#222222',
		white: '#dddddd',
	},
};

const Home: React.FC = () => <Center>Home Page</Center>;

const Main: React.FC = () => (
	<ChakraProvider theme={extendTheme({ colors })}>
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
			</Switch>
		</Router>
	</ChakraProvider>
);

export default Main;
