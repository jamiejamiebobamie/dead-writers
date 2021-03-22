import {
  take,
  takeLatest,
  put,
  call,
  apply,
  all,
  actionChannel,
  select,
} from "redux-saga/effects";
import {
  tweetQuote,
  clearQuote,
  actionTypes,
  addVideoPlayIndex,
} from "../actions";
import { tweetSelector, quoteSelector } from "../selectors";
import fetch from "isomorphic-fetch";

function* sendToTwitterAccount() {}

export function* tweetQuoteSaga() {
  const tweetQuoteBuffer = yield actionChannel(actionTypes.TWEET_QUOTE);
  while (true) {
    const tweetRequest = yield take(tweetQuoteBuffer);
    // 'postBody', an object with a 'status' field, contains the tweet
    const postBody = yield select(tweetSelector);
    const postBodyJSON = yield call(JSON.stringify, postBody);
    const response = yield call(
      fetch,
      "https://re-tweet.herokuapp.com/api/v1/dead-tweet",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: postBodyJSON,
      }
    );
    const data = yield apply(response, response.json);
    console.log(data);
    yield put(clearQuote());
    // set video index to 7!
    yield put(addVideoPlayIndex({ author: "end" }));
  }
}
