import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import { LineAwesome } from 'react-line-awesome-svg';

const Icon = forwardRef(({size, color, svg, ...remainderProps}, ref) => (
  <LineAwesome ref={ref} icon={svg} fontSize={size} fill={color} {...remainderProps} />
));

Icon.defaultProps = {
  size: '30px',
};

Icon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  svg: PropTypes.func.isRequired,
};

export default Icon;
