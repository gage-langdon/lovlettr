import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ onChange, value, placeholder, className, disabled, type }) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      disabled={disabled}
      maxLength={40}
    />
  );
};

Input.defaultProps = {
  className: '',
  placeholder: '',
  value: '',
  disabled: false,
  type: 'text'
};

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string
};

export default Input;
