import { createStore } from 'redux';
import checkboxReducer from './reducers/checkbox/';

const store = createStore({ checkboxReducer });
