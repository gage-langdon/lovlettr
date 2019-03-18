import { createStore as reduxCreateStore } from 'redux';
import combinedReducers from './reducers/reducers-combined';

//compiling fails if you dont do createStore as an arrow function
const createStore = () => reduxCreateStore(combinedReducers);
export default createStore;
