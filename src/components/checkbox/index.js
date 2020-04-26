import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

//images
import Tick from '../../images/tick.svg';

const Checkbox = ({ checked, onClick }) => {
  return (
    <div onClick={() => onClick()}>
      {(checked && <Tick className="tick" />) || null}
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
