import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
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

const centeredProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const StyledBox = styled.div`
    box-sizing: border-box;
    min-width: 0;
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

const Box = forwardRef(({ centeredContent, ...restProps }, ref) => <StyledBox ref={ref} {...(centeredContent ? centeredProps : {})} {...restProps} />);

Box.propTypes = {
  centeredContent: PropTypes.bool,
};
export default Box;
