// Actions
import {GET_HOTTAKE, POST_YES, POST_NO} from '../Actions/hotTakes';

//Initial State
const hotTakesInitialState = {
  id: null,
  details: null
}

//Reducer

export const hotTakes = (state= hotTakesInitialState, action) => {
  switch (action.type) {
    case GET_HOTTAKE:
    return {
      ...state,
      id: action.id,
      details: action.details
    }
    default:
      return state;
  }
};
