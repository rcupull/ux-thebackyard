import React from 'react';
import Icon from '.';
import ThemeDecorator from '../../theme-decorator';
import { SvgAccusoft, SvgAddressBook, SvgAdobe } from 'react-line-awesome-svg/icons';


export default {
	title: 'Components/Icon',
	component: Icon,
	decorators: [ThemeDecorator],
};

export const Default = () => <Icon svg={SvgAccusoft} />;

export const Colors = () => (
	<>
		<Icon svg={SvgAccusoft} /><br/>
		<Icon svg={SvgAccusoft} color="red"/><br/>
		<Icon svg={SvgAccusoft} color="blue"/><br/>
		<Icon svg={SvgAccusoft} color="green"/><br/>
	</>
);

export const Sizes = () => (
	<>
		<Icon svg={SvgAccusoft} size="10px"/><br/>
		<Icon svg={SvgAccusoft} size="30px"/><br/>
		<Icon svg={SvgAccusoft} size="50px"/><br/>
		<Icon svg={SvgAccusoft} size="80px"/><br/>
	</>
);