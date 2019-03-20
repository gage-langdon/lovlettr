import React from 'react';

export default ({ text, onClick, value }) => {
  return (
    <button disabled={false} onClick={() => onClick(value)}>
      {text}
    </button>
  );
};
