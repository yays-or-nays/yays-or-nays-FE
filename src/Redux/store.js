// Redux Imports
import {combineReducers} from 'redux';
import {createStore} from 'redux';

// App Imports
import categories from './Reducers/categories';

// Root Reducer
const rootReducer = combineReducers({
  categories: categories,
});

// Configure Store
const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
