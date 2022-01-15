import React from 'react';
import PropTypes from 'prop-types';

const Sub = ({ hidden, text, className, style }) => {
  return (
    <sub hidden={hidden} className={className} style={style}>
      {text}
    </sub>
  );
};

Sub.defaultProps = {
  className: '',
  hidden: false,
  style: undefined
};

Sub.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  hidden: PropTypes.bool,
  style: PropTypes.object
};

export default Sub;
