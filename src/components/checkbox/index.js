import React from 'react';

//component
const checkbox = ({ onClick }) => (
  <input type="checkbox" onClick={() => onClick()} />
);
export default checkbox;
