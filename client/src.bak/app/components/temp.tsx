import { Box, Container } from '@chakra-ui/react';
import { Logo } from '../svgs';

export const Temp: React.FC = () => (
	<Box
		textAlign="center"
		fontSize="1.2rem"
		padding="1rem"
		mt="5rem"
		height="100%"
	>
		Welcome to my site
		<Container width="200px" padding="1rem">
			<Logo />
		</Container>
		I'm working on it.
	</Box>
);
