// Actions
import {GET_CATEGORIES} from '../Actions/categories';

// Initial State
const categoriesInitialState = {
  categories: [],
};

// Reducers

export const categories = (state = categoriesInitialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    default:
      return state;
  }
};
