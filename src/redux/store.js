import { createStore } from 'redux';
import combinedReducers from './reducers/reducers-combined';

export default createStore({ combinedReducers });
