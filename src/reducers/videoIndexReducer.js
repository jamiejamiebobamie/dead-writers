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
      let number = 8;
      if (action.payload && action.payload.author) {
        // someimtes the API returns a weird last character like: "Poe↵"
        // need to remove it.
        const characterLength = action.payload.author.length;
        const lastCharacter = action.payload.author[characterLength - 1];
        const authorName =
          lastCharacter === "↵"
            ? action.payload.author.slice(0, -1)
            : authorName;
        let number = AUTHOR_INDEX_LOOKUP[authorName];
        console.log(number, action, authorName, lastCharacter);
      }
      const videoIndexReducerState = {
        index: number,
      };
      const newState = Object.assign({}, state, videoIndexReducer);
      console.log(number, action);
      return newState;
    default:
      return state;
  }
};
