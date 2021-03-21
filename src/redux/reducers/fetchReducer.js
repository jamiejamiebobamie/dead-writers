import { actionTypes } from "../actions";
import { initState } from "./initState";

export const fetchReducer = (state = initState.fetchReducer, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_QUOTE:
      return Object.assign({}, state, { isFetching: true });
    case actionTypes.NOT_FETCHING_QUOTE:
      return Object.assign({}, state, { isFetching: false });
    default:
      return state;
  }
};
