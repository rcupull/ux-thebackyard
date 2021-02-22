import React from 'react';
import Button from '.';
import Box from '../box';
import ThemeDecorator from '../../theme-decorator';
import { SvgAccusoft, SvgAddressBook, SvgAdobe } from 'react-line-awesome-svg/icons';


export default {
	title: 'Components/Button',
	component: Button,
	decorators: [ThemeDecorator],
};

export const Default = () => <Button label="Default"/>;

export const WithIcon = () => (
	<>
		<Button svgIcon={SvgAccusoft} label="SvgAccusoft"/>
		<br/>
		<Button svgIcon={SvgAddressBook} label="SvgAddressBook"/>
		<br/>
		<Button svgIcon={SvgAdobe} label="SvgAdobe"/>
		<br/>
	</>
);

export const Designs = () => (
	<>
		<Button label="Default"/><br/>
		<Button label="Primary" design="primary" /><br/>
		<Button label="Shadow" design="shadow" /><br/>
		<Button label="Error" design="error" /><br/>
		<Button label="Success" design="success" /><br/>
		<Button label="Info" design="info" /><br/>
		<Button label="Link" design="link" /><br/>
	</>
);
export const Disabled = () => (
	<>
		<Button label="Primary" design="primary" disabled/><br/>
		<Button label="Shadow" design="shadow" disabled/><br/>
		<Button label="Error" design="error" disabled/><br/>
		<Button label="Success" design="success" disabled/><br/>
		<Button label="Info" design="info" disabled/><br/>
		<Button label="Link" design="link" disabled/><br/>
	</>
);

export const Width = () => (
	<>
		<Button label="Default"/><br/>
		<Button label="20rem" width="20rem"/><br/>
		<Button label="5rem" width="5rem"/><br/>
		<Button label="200px" width="200px"/><br/>
		<Box width="30rem">
			<Button label="inherit(30rem)" width="inherit" /><br/>
		</Box>
	</>
);

export const onClick = () => (
		<>
			<Button label="Click Me" onClick={()=>{alert('Click')}}/><br/>
			<Button label="Click Me disabled" disabled onClick={()=>{alert('Click')}}/><br/>
		</>
);