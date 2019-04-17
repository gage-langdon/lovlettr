import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ onChange, value, placeholder, className, disabled }) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      type="text"
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
  disabled: false
};

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};

export default Input;
