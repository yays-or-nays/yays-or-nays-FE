// Imports
import axios from 'axios';
import {query} from 'gql-query-builder';

// Action Types
export const GET_CATEGORIES = 'GET_CATEGORIES';

//Actions

// Get all Categories
export function getCategories() {
  return axios
    .post(
      '/categories',
      query({
        operation: 'cagetories maybe',
        fields: ['id', 'name'],
      }),
    )
    .then(response => {
      if (response.status === 200) {
        return {
          type: GET_CATEGORIES,
          error: null,
          // adjust below to access properly
          list: response.data.categories,
        };
      } else {
        return {
          type: GET_CATEGORIES,
          error: 'Some error occurred. Please try again.',
        };
      }
    });
}
