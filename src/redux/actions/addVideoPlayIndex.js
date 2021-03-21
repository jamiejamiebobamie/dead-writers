import * as actionTypes from "./actionTypes";

export const addVideoPlayIndex = (payload) => {
  return {
    type: actionTypes.ADD_INDEX,
    payload,
  };
};
