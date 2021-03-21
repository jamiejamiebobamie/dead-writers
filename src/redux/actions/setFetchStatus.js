import * as actionTypes from "./actionTypes";

export const setIsFetching = () => {
  return {
    type: actionTypes.FETCHING_QUOTE,
  };
};

export const setIsNotFetching = () => {
  return {
    type: actionTypes.NOT_FETCHING_QUOTE,
  };
};
