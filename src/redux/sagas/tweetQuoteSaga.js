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
import { tweetQuote, actionTypes } from "../actions";
import { tweetSelector, quoteSelector } from "../selectors";
import fetch from "isomorphic-fetch";

import { push } from "react-router-redux";

// "https://twitter.com/writers_dead"

function* sendToTwitterAccount() {}

export function* tweetQuoteSaga() {
  const tweetQuoteBuffer = yield actionChannel(actionTypes.TWEET_QUOTE);
  while (true) {
    const tweetRequest = yield take(tweetQuoteBuffer);
    // an object with a 'status' field that contains the tweet content
    const postBody = yield select(tweetSelector);
    const postBodyJSON = yield call(JSON.stringify, postBody);
    console.log(postBody, postBodyJSON);
    // still working on tweeting quote.
    // const response = yield call(
    //   fetch,
    //   "https://api.twitter.com/1.1/statuses/update.json",
    //   {
    //     method: "POST",
    //     mode: "cors",
    //     cache: "no-cache",
    //     credentials: "same-origin",
    //     headers: {
    //       authorization: "",
    //       "Content-Type": "application/json",
    //     },
    //     redirect: "follow",
    //     referrerPolicy: "no-referrer",
    //     body: { status: postBodyJSON },
    //   }
    // );
    // const data = yield apply(response, response.json);
    // console.log(data, response);
    // yield put(push("https://twitter.com/writers_dead"));
  }
}
