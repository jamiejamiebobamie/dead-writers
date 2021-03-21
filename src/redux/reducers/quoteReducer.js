import { actionTypes } from "../actions";
import { initState } from "./initState";

export const quoteReducer = (state = initState.quoteReducer, action) => {
  switch (action.type) {
    case actionTypes.ADD_QUOTE:
      const FULL_NAME_LOOKUP = {
        Grimm: "The Brother's Grimm",
        Poe: "Edgar Alan Poe",
        Wilde: "Oscar Wilde",
        Woolf: "Virginia Woolf",
        Carroll: "Lewis Carroll",
        Shakespeare: "William Shakespeare",
        Lovecraft: "HP Lovecraft",
      };
      let newState = Object.assign({}, state, {
        quote: action.payload.quote,
        author: FULL_NAME_LOOKUP[action.payload.author],
      });
      return newState;
    case actionTypes.CLEAR_QUOTE:
      newState = Object.assign({}, state, {
        quote: null,
        author: null,
      });
      return newState;
    default:
      return state;
  }
};
