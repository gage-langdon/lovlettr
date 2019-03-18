import React from 'react';
import onClick from '../../redux/actions/checkbox';
//this is used to access the onClick function
const updateState = onClick.onClick;

const checkbox = () => <input type="checkbox" onClick={updateState} />;

export default checkbox;
