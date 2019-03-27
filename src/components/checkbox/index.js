import React from 'react';
import './styles.css';
//images
import Tick from '../../images/tick.svg';

export default () => {
  return (
    <div>
      <Tick className="tick" />
      <div className="tick-container" />
    </div>
  );
};
