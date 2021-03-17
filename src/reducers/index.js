import { combineReducers } from "redux";

const initState = {};
//
const userReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducer = combineReducers({
  userReducer,
});

export default reducer;
