import { createStore as reduxCreateStore } from 'redux';
import combinedReducers from './reducers';

export default () => reduxCreateStore(combinedReducers);
