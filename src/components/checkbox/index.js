import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

//images
import Tick from '../../images/tick.svg';

const Checkbox = ({ hidden, onClick }) => {
  return (
    <div onClick={() => onClick()}>
      <Tick className="tick" hidden={hidden} />
      <div className="tick-container" />
    </div>
  );
};

Checkbox.defaultProps = {
  hidden: true
};
Checkbox.propTypes = {
  hidden: PropTypes.bool,
  onClick: PropTypes.func
};
export default Checkbox;
