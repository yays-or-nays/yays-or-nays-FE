import axios from 'axios';
import {mutation} from 'gql-query-builder';

const mutateYes = id => {
  return axios
    .post(
      'https://yays-or-nays-be.herokuapp.com/graphql',
      mutation({
        operation: `incrementYesVote(input: {id: ${id}})`,
        fields: ['clientMutationId']
      }),
    )
    .then(response => {
      console.log(response.data);
      if (response.status < 400) {
        console.log("sucees");
        // dispatch({
        //   type: GET_CATEGORIES,
        //   error: null,
        //   // adjust below to access properly
        //   categories: response.data.data.tags,
        // });
      } else {
        console.log('fail')
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
        // dispatch({
        //   type: GET_CATEGORIES,
        //   error: null,
        //   // adjust below to access properly
        //   categories: response.data.data.tags,
        // });
      } else {
        return response.status;
        // dispatch({
        //   type: GET_CATEGORIES,
        //   error: 'Some error occurred. Please try again.',
        // });
      }
    });
};

export {mutateYes, mutateNo};
