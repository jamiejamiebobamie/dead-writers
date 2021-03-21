import { combineReducers } from "redux";
import { quoteReducer } from "./quoteReducer";
import { videoIndexReducer } from "./videoIndexReducer";
import { fetchReducer } from "./fetchReducer";

const reducer = combineReducers({
  quoteReducer,
  videoIndexReducer,
  fetchReducer,
});

export default reducer;
