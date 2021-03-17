import { take, put, call, apply, all, actionChannel } from "redux-saga/effects";
import { actionTypes } from "../actions";
import { addQuote, addVideoPlayIndex } from "../actions";
import fetch from "isomorphic-fetch";

export function* fetchQuoteSaga() {
  const fetchQuotesBuffer = yield actionChannel(actionTypes.FETCH_QUOTE);
  while (true) {
    const quoteRequest = yield take(fetchQuotesBuffer);
    const response = yield call(
      fetch,
      "https://re-tweet.herokuapp.com/api/v1/quote"
    );
    const data = yield apply(response, response.json);
    if (data) {
      console.log(data);
      yield all([put(addQuote(data)), put(addVideoPlayIndex(data))]);
    }
  }
}
