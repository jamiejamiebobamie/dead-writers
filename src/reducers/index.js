import { combineReducers } from "redux";

const initState = {};
//
// const userReducer = (state = initState, action) => {
//   switch (action.type) {
//     case FETCH_USERS:
//       return { ...state, loading: true, message: "" };
//     case FETCH_USERS_REJECTED:
//       return { ...state, loading: false, message: action.data };
//     case FETCH_USERS_RESOLVED:
//       return { ...state, users: action.data, loading: false, message: "" };
//     default:
//       return state;
//   }
// };

const reducer = combineReducers({
  // userReducer,
});

export default reducer;
