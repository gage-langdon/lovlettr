import React from 'react';

export default ({ onChange, value, placeholder, className }) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
};
