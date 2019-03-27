import React from 'react';
import './styles.css';

//images
import Tick from '../../images/tick.svg';

export default ({ hidden, onClick }) => {
  return (
    <div onClick={() => onClick()}>
      <Tick className="tick" hidden={hidden} />
      <div className="tick-container" />
    </div>
  );
};
