import { Box } from '@chakra-ui/react';

const Navbar = () => (
	<Box>
		<Box
			textAlign="center"
			fontSize="1.2rem"
			padding="1rem"
			bg="primary.white"
		>
			<h2>
				<a href="/" rel="history">
					HOME
				</a>
				&nbsp;&nbsp;<small>———</small>&nbsp;&nbsp;
				<a href="/about" rel="history">
					ABOUT
				</a>
				&nbsp;&nbsp;<small>———</small>&nbsp;&nbsp;
				<a href="/portfolio" rel="history">
					PORTFOLIO
				</a>
				&nbsp;&nbsp;<small>———</small>&nbsp;&nbsp;
				{/* <a
					href="https://github.com/justincremer"
					rel="noreferrer"
					target="_blank"
				>
					GITHUB
				</a>
				&nbsp;&nbsp;<small>———</small>&nbsp;&nbsp; */}
				<a href="mailto:jacremer@live.com">CONTACT</a>
				&nbsp;&nbsp;<small>———</small>&nbsp;&nbsp;
				<a href="/settings">SETTINGS</a>
			</h2>
		</Box>
	</Box>
);

export default Navbar;
