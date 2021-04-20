//Imports
import axios from 'axios';
import {query} from 'gql-query-builder';

// Action Types
export const GET_HOTTAKE = 'GET_HOTTAKE';

// Get Hottake
export function getHotTake(categoryID) {
  return dispatch => {
    return axios
      .post(
        'https://yays-or-nays-be.herokuapp.com/graphql',
        query({
          operation: `hotTakeByCategory(tagId: ${categoryID})`,
          fields: [
            'id',
            'question',
            'yesVote',
            'noVote',
            'picture',
            'tag {id, category}',
          ],
        }),
      )
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: GET_HOTTAKE,
            error: null,
            details: response.data.data.hotTakeByCategory,
          });
        } else {
          dispatch({
            type: GET_HOTTAKE,
            error: 'Some error occurred. Please try again.',
          });
        }
      });
  };
}
