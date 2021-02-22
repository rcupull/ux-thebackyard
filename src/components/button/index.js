import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Box from '../box';
import Icon from '../icon';

import styled from 'styled-components';
import {
  flexbox,
  background,
  border,
  color,
  layout,
  position,
  shadow,
  space,
  typography,
  compose,
} from 'styled-system';

const BasicButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  
  display:flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease 0s;
  padding: 8px 15px;
  &:disabled{
    cursor: not-allowed;
  };
  &:focus {
    border: none;
    outline: none;
  }
  ${compose(
    flexbox,
    background,
    border,
    color,
    layout,
    position,
    shadow,
    space,
    typography,
  )};
`;

export const designs = {
  DEFAULT: 'default',
  SHADOW: 'shadow',
  ERROR: 'error',
  SUCCESS: 'success',
  PRIMARY: 'primary',
  INFO: 'info',
  LINK: 'link',
};

const Shadow = styled(BasicButton)`
  color: ${({ theme }) => theme.colors.shadowButtonText};
  fill: ${({ theme }) => theme.colors.shadowButtonText};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.xxl};
  }
`;

const Error = styled(BasicButton)`
  background-color: ${({ theme }) => theme.colors.errorButtonBackground};
  color: ${({ theme }) => theme.colors.errorButtonText};
  fill: ${({ theme }) => theme.colors.errorButtonText};
  &:hover {
    background-color: ${({ theme }) => theme.colors.errorButtonHover};
  }
`;

const Success = styled(BasicButton)`
  background-color: ${({ theme }) => theme.colors.successButtonBackground};
  color: ${({ theme }) => theme.colors.successButtonText};
  fill: ${({ theme }) => theme.colors.successButtonText};
  &:hover {
    background-color: ${({ theme }) => theme.colors.successButtonHover};
  }
`;

const Primary = styled(BasicButton)`
  background-color: ${({ theme }) => theme.colors.primaryButtonBackground};
  color: ${({ theme }) => theme.colors.primaryButtonText};
  fill: ${({ theme }) => theme.colors.primaryButtonText};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryButtonHover};
  }
`;

const Info = styled(BasicButton)`
  background-color: ${({ theme }) => theme.colors.infoButtonBackground};
  color: ${({ theme }) => theme.colors.infoButtonText};
  fill: ${({ theme }) => theme.colors.infoButtonText};
  &:hover {
    background-color: ${({ theme }) => theme.colors.infoButtonHover};
  }
`;

const Default = styled(BasicButton)`
  background-color: ${({ theme }) => theme.colors.defaultButtonBackground};
  color: ${({ theme }) => theme.colors.defaultButtonText};
  fill: ${({ theme }) => theme.colors.defaultButtonText};
  &:hover {
    background-color: ${({ theme }) => theme.colors.defaultButtonHover};
    color: ${({ theme }) => theme.colors.defaultButtonTextHover};
    fill: ${({ theme }) => theme.colors.defaultButtonTextHover};
  }
`;

const Link = styled(BasicButton)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.tableTextColor}; 
  fill:  ${({ theme }) => theme.colors.tableTextColor};
  font-weight: 500;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryButtonBackground};
    fill:  ${({ theme }) => theme.colors.primaryButtonBackground};
  }
`;

const components = {
  [designs.SHADOW]: Shadow,
  [designs.ERROR]: Error,
  [designs.SUCCESS]: Success,
  [designs.PRIMARY]: Primary,
  [designs.INFO]: Info,
  [designs.DEFAULT]: Default,
  [designs.LINK]: Link,
};

const Button = forwardRef((props, ref)=>{
  const {design, rounded, label, svgIcon, ...remainderProps} = props;
  const Component = components[design];
  const borderRadius = rounded ? '60px' : '0px';
  return (
    <Component
      fontWeight="sem"
      borderRadius={borderRadius}
      {...remainderProps}
    >
      {!!svgIcon && (
        <Box 
          display="flex" 
          alignItem="center" 
          mr="5px"
        >
          <Icon svg={svgIcon} size='18px' />
        </Box>
      )}
      {label}
    </Component>
  );
});

Button.defaultProps = {
  design: designs.DEFAULT
};

Button.propTypes = {
  design: PropTypes.oneOf(Object.values(designs)),
  rounded: PropTypes.bool,
  svgIcon: PropTypes.func,
  label: PropTypes.string,
};

export default Button;
