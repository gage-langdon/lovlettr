import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = ({ text, onClick, className, primary, type, disabled }) => (
  <button
    className={`${primary ? 'btn-primary' : ''} ${className}`}
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);

Button.defaultProps = {
  text: '',
  className: '',
  type: 'button',
  primary: false,
  disabled: false
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  primary: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
  disabled: PropTypes.bool
};

export default Button;
