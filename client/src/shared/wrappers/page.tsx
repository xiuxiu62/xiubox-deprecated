import { Box } from '@material-ui/core';
import { Header, Footer } from '../components';

const PageWrapper: React.FC = ({ children }) => (
	<Box width="100%" height="100%">
		<Header />
		{children}
		<Footer />
	</Box>
);

export { PageWrapper };
