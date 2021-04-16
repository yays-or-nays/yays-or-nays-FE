// Actions
import {GET_CATEGORIES} from '../Actions/categories';

// Initial State
const categoriesInitialState = {
  // Extension: Add in the below actions
  // isLoading: false,
  error: null,
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
