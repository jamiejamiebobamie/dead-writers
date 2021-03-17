import * as actionTypes from "./actionTypes";

export const addQuote = (payload) => {
  return {
    type: actionTypes.ADD_QUOTE,
    payload,
  };
};
