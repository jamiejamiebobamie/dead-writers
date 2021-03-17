import { combineReducers } from "redux";
import { quoteReducer } from "./quoteReducer";
import { videoIndexReducer } from "./videoIndexReducer";

const reducer = combineReducers({
  quoteReducer,
  videoIndexReducer,
});

export default reducer;
