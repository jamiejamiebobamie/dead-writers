import { actionTypes } from "../actions";
import { initState } from "./initState";

export const quoteReducer = (state = initState.quoteReducer, action) => {
  switch (action.type) {
    case actionTypes.ADD_QUOTE:
      const quoteReducerState = {
        quote: action.payload.quote,
        author: action.payload.author,
      };
      const newState = Object.assign({}, state, quoteReducerState);
      return newState;
    default:
      return state;
  }
};
