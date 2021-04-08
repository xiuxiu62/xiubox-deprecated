import { extendTheme } from '@chakra-ui/react';

// const colors = {
// 	primary: {
// 		black: '#222222',
// 		white: '#dddddd',
// 		pink: '#fca6ff',
// 	},
// };

const config = {
	intialColorMode: 'dark',
	useSystemColorMode: false,
};

const theme = extendTheme({ config });
export { theme };
