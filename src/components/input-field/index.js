import React from 'react';

export default ({ onChange, value, disabled }) => {
  return (
    <input type="text" value={value} onChange={e => onChange(e.target.value)} />
  );
};

/* 
Needs: 
    function - onChange as prop.
        onChange: Function modifies state, takes value in text field and calls function with the value.
    
    attributes - disabled as prop.
        disabled: We want the option to disable this unless specified otherwise. This is important as this will be
                  enabled from a checkbox or a add answer button, state will be passed down.

        Needs a css file for styling.

    param - value
        value is the current value being pulled from the state and sent from the parent component.

    NOTE: onChange will be generic inside this component, but the prop being passed will be specific 
          to the needed state update.

    NOTE: I need to be able to pass a placeholder.
*/
