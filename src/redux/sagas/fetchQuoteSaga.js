import {
  take,
  put,
  call,
  apply,
  all,
  actionChannel,
  delay,
  takeLatest,
  takeLeading,
} from "redux-saga/effects";
import { actionTypes } from "../actions";
import {
  addQuote,
  addVideoPlayIndex,
  setIsFetching,
  setIsNotFetching,
} from "../actions";
import fetch from "isomorphic-fetch";

export function* fetchQuoteSaga() {
  // const fetchQuotesBuffer = yield actionChannel(actionTypes.FETCH_QUOTE);
  while (true) {
    // don't use actionChannel. it catches all presses to the jar button
    // only want one press at a time.
    const quoteRequest = yield take(actionTypes.FETCH_QUOTE);
    yield put(setIsFetching());

    // ---- API ----
    // const response = yield call(
    //   fetch,
    //   "https://re-tweet.herokuapp.com/api/v1/quote"
    // );
    // const data = yield apply(response, response.json);
    // ------------

    // ------- fake API below --------
    const AUTHOR_INDEX_LOOKUP = {
      Grimm: 0,
      Poe: 1,
      Wilde: 2,
      Woolf: 3,
      Carroll: 4,
      Shakespeare: 5,
      Lovecraft: 6,
    };

    const arr = Object.keys(AUTHOR_INDEX_LOOKUP);
    const randIndex = Math.floor(Math.random() * 7);
    const randAuthor = arr[randIndex];

    const data = {
      author: randAuthor,
      quote: `This is a test quote.
      This is a long quote with a lot of words.
      How is this working? Hahah. Yeah, yay. Yay. Haha he theeheh, lol.
      Yaya, hahaha who who who who heheheheheheheheh what wow. lol.
      Hahah lol. Hehethathatha hhshdsdhsdh. Jajajssdmsdsm.`,
    };
    yield delay(2500);
    // ------------

    const ALPHA = {
      a: 1,
      b: 1,
      c: 1,
      d: 1,
      e: 1,
      f: 1,
      g: 1,
      h: 1,
      i: 1,
      j: 1,
      k: 1,
      l: 1,
      m: 1,
      n: 1,
      o: 1,
      p: 1,
      q: 1,
      r: 1,
      s: 1,
      t: 1,
      u: 1,
      v: 1,
      w: 1,
      x: 1,
      y: 1,
      z: 1,
    };

    if (data) {
      const lastLetter = data.author.substr(data.author.length - 1);
      let sanitizedAuthorName = !ALPHA[lastLetter]
        ? data.author.substr(0, data.author.length - 1)
        : data.author;
      yield put(setIsNotFetching());
      yield put(addVideoPlayIndex({ author: sanitizedAuthorName }));
      yield delay(2500);
      yield put(addQuote({ quote: data.quote, author: sanitizedAuthorName }));
    }
  }
}
