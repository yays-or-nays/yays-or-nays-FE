import axios from 'axios';
import {mutation} from 'gql-query-builder';

const mutateYes = id => {
  return axios
    .post(
      'https://yays-or-nays-be.herokuapp.com/graphql',
      mutation({
        operation: `incrementYesVote(input: {id: ${id}})`,
        fields: ['clientMutationId'],
      }),
    )
    .then(response => {
      if (response.status < 400) {
      } else {
        console.log('fail');
        // dispatch({
        //   type: GET_CATEGORIES,
        //   error: 'Some error occurred. Please try again.',
        // });
      }
    });
};

const mutateNo = id => {
  return axios
    .post(
      'https://yays-or-nays-be.herokuapp.com/graphql',
      mutation({
        operation: `incrementNoVote(input: {id: ${id}}) {
          clientMutationId
        }`,
      }),
    )
    .then(response => {
      console.log(response.data);
      if (response.status < 400) {
        return response.data;
      } else {
        return response.status;
      }
    });
};

export {mutateYes, mutateNo};
