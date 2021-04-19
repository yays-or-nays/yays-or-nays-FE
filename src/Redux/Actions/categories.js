// Imports
import axios from 'axios';
import {query} from 'gql-query-builder';

// Action Types
export const GET_CATEGORIES = 'GET_CATEGORIES';

//Actions

// Get all Categories
export function getCategories() {
  return dispatch => {
    return axios
      .post(
        'https://yays-or-nays-be.herokuapp.com/graphql',
        query({
          operation: 'tags',
          fields: ['id', 'category'],
        }),
      )
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: GET_CATEGORIES,
            error: null,
            // adjust below to access properly
            categories: response.data.data.tags,
          });
        } else {
          dispatch({
            type: GET_CATEGORIES,
            error: 'Some error occurred. Please try again.',
          });
        }
      });
  };
}
