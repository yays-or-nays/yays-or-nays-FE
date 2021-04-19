// Actions
import {GET_HOTTAKE} from '../Actions/hotTakes';

//Initial State
const hotTakesInitialState = {
  error: null,
  details: null
}

//Reducer

export const hotTakes = (state= hotTakesInitialState, action) => {
  switch (action.type) {
    case GET_HOTTAKE:
    return {
      ...state,
      error: action.error,
      details: action.details
    }
    default:
      return state;
  }
};
