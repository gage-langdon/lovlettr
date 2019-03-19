import React from 'react';
import { Provider } from 'react-redux';
import createStore from './src/redux/store';

//calls reduxCreateStore
const store = createStore();

//wraps root element
export default ({ element }) => <Provider store={store}>{element}</Provider>;
