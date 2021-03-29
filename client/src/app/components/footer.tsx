import { Box, Button, useColorMode } from '@chakra-ui/react';
import React from 'react';

const ToggleColorMode: React.FC = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Button onClick={toggleColorMode}>
			Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
		</Button>
	);
};

export const Footer: React.FC = () => (
	<Box
		flex="1"
		flexWrap="wrap"
		textAlign="center"
		alignContent="center"
		justifyContent="center"
		margin="auto"
		mb="6"
		padding-right="1.25rem"
		padding-left="1.25rem"
	>
		<ToggleColorMode />
	</Box>
);
