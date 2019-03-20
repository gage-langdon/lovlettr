import React from 'react';

export default ({}) => {
  return <div>input</div>;
};

/* 
Needs: 
    function - onChange as prop.
        onChange: Function modifies state, takes value in text field and calls function with the value.
    
    attributes - disabled as prop.
        disabled: We want the option to disable this unless specified otherwise. This is important as this will be
                  enabled from a checkbox or a add answer button, state will be passed down.

    NOTE: onChange will be generic inside this component, but the prop being passed will be specific 
          to the needed state update.
*/
