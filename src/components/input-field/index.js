import React from 'react';

export default ({ onChange, value, placeholder, className, disabled }) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      disabled={disabled}
    />
  );
};
