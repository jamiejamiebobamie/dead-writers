import React, { useState } from "react";
import { loadingMsgDiv } from "./loadingMsgDiv";
import { aboutInfoDiv } from "./aboutInfoDiv";
import { quoteDiv } from "./quoteDiv";
import "./QuoteDisplay.css";

export const QuoteDisplay = ({ quote, author, clearQuote, isFetching }) => {
  const [aboutIsToggled, toggleAboutDiv] = useState(false);
  const contentDiv = aboutIsToggled ? aboutInfoDiv() : quoteDiv(quote, author);
  const mainDiv = (
    <div className="QuoteDisplay fade-in">
      <button
        className="closeWindowButton flicker"
        onClick={() => {
          clearQuote();
        }}
        title="close"
      >
        &#10005;
      </button>
      {contentDiv}
      <button
        className="questionMark"
        onClick={() => {
          toggleAboutDiv(!aboutIsToggled);
        }}
        title="About"
      >
        &#63;
      </button>
    </div>
  );
  // author = "null";
  const _quoteDisplay =
    author === null ? (isFetching ? loadingMsgDiv() : null) : mainDiv;

  return _quoteDisplay;
};
