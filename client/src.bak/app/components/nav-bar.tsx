import { Box, Flex, Link, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { MenuIcon, CloseIcon } from '../svgs';

const MenuToggle = (props: { toggle: any; isOpen: boolean }) => {
	const { toggle, isOpen } = props;
	return (
		<Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
			{isOpen ? <CloseIcon /> : <MenuIcon />}
		</Box>
	);
};

const MenuItem = (props: { to: string; children: any; [x: string]: any }) => {
	const { to, children, ...rest } = props;

	return (
		<div>
			<Link href={to}>
				<Text display="block" {...rest}>
					{children}
				</Text>
			</Link>
		</div>
	);
};

const MenuLinks = (props: { isOpen: boolean }) => {
	const { isOpen } = props;

	return (
		<Box
			display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
			flexBasis={{ base: '100%', md: 'auto' }}
		>
			<Stack
				spacing={8}
				align="center"
				justify={['center', 'space-between', 'flex-end', 'flex-end']}
				direction={['column', 'row', 'row', 'row']}
				pt={[4, 4, 0, 0]}
			>
				<MenuItem to="/">Home</MenuItem>
				<MenuItem to="/About">About</MenuItem>
				<MenuItem to="/Portfolio">Portfolio</MenuItem>
				<MenuItem to="/Contact">Contact</MenuItem>
				<MenuItem to="/Settings" isLast>
					Settings
				</MenuItem>
			</Stack>
		</Box>
	);
};

const NavBarContainer = (props: { children: any; [x: string]: any }) => {
	const { children, ...rest } = props;
	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			w="100%"
			mb={8}
			p={8}
			{...rest}
		>
			{children}
		</Flex>
	);
};

export const NavBar: React.FC<any> = (props: any): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<NavBarContainer {...props}>
			<MenuToggle toggle={toggle} isOpen={isOpen} />
			<MenuLinks isOpen={isOpen} />
		</NavBarContainer>
	);
};
