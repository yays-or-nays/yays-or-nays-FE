// Redux Imports
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

// App Imports
import {categories} from './Reducers/categories';

// Root Reducer
const rootReducer = combineReducers({
  categories: categories,
});

// Configure Store
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
