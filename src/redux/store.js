import { createStore as reduxCreateStore } from 'redux';
import combinedReducers from './reducers/reducers-combined';

/*
-Compiling fails if you dont do createStore as an arrow function

-Because the store is a function, when you import it you need to do the following...

    import createStore from '../../redux/store';
    const store = createStore();
You can now use all functionality such as store.getState();
*/
const createStore = () => reduxCreateStore(combinedReducers);
export default createStore;
