import { actionTypes } from "../actions";
import { initState } from "./initState";

const AUTHOR_INDEX_LOOKUP = {
  Grimm: 0,
  Poe: 1,
  Wilde: 2,
  Woolf: 3,
  Carroll: 4,
  Shakespeare: 5,
  Lovecraft: 6,
};

export const videoIndexReducer = (
  state = initState.videoIndexReducer,
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_INDEX:
      let number = action.payload.author
        ? AUTHOR_INDEX_LOOKUP[action.payload.author]
        : 8;
      const newState = Object.assign({}, state, { index: number });
      return newState;
    default:
      return state;
  }
};
