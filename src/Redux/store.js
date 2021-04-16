// Redux Imports
import {combineReducers} from 'redux';
import {createStore} from 'redux';

// App Imports
import categories from './Reducers/categories';

// Root Reducer
const rootReducer = combineReducers({
  categories,
});

// Configure Store
export const configureStore = () => {
  return createStore(rootReducer);
};
