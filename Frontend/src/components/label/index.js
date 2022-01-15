import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Label = ({ children, className, cursive }) => (
  <div className={`label ${cursive ? 'cursive' : ''} ${className}`}>
    {children}
  </div>
);

Label.defaultProps = {
  children: '',
  className: '',
  cursive: false
};

Label.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  cursive: PropTypes.bool
};

export default Label;
