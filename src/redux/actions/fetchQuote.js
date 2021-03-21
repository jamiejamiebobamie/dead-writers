import * as actionTypes from "./actionTypes";

export const fetchQuote = () => {
  return {
    type: actionTypes.FETCH_QUOTE,
  };
};
