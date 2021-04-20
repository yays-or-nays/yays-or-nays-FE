// Redux Imports
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

// App Imports
import {categories} from './Reducers/categories';
import {hotTakes} from './Reducers/hotTakes';

// Root Reducer
const rootReducer = combineReducers({
  categories: categories,
  hotTakes: hotTakes,
});

// Configure Store
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
