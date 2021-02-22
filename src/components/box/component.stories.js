import React from 'react';
import Box from '.';
import ThemeDecorator from '../../theme-decorator';

export default {
	title: 'Components/Box',
	component: Box,
	decorators: [ThemeDecorator],
};

export const Default = () => (
	<p>
		Box has no default UI. See other Box stories to view how props effect Box
		component.
	</p>
);
export const CommonStylingProps = () => (
	<Box
		m="30px"
		p="30px"
		display="flex"
		justifyContent="center"
		alignItems="center"
		color="white"
		bg="gray"
		width="100px"
		height="100px"
		borderRadius="md"
		boxShadow="sm"
	>
		Box
	</Box>
);

export const CommonProps = () => (
	<Box
		as="button"
		p="10px"
		border="2px solid red"
		color="red"
		backgroundColor="none"
	>
		button
	</Box>
);
