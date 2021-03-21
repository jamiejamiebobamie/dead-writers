import React, { useState, useEffect } from "react";

import "./QuoteDisplay.css";

export const QuoteDisplay = ({
  quote,
  author,
  clearQuote,
  isFetching,
  ...props
}) => {
  const display =
    author === null ? (
      isFetching ? (
        <>
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
          <h3 className="loadingMsg">generating...</h3>
        </>
      ) : null
    ) : (
      <div className="QuoteDisplay fade-in">
        <button
          className="closeWindowButton flicker"
          onClick={() => {
            clearQuote();
          }}
        >
          &#10005;
        </button>
        <div className="quoteContainer">
          <h3 className="quoteContent quote">{quote}</h3>
          <h4 className="quoteContent author">-{author}</h4>
        </div>
        <button
          onClick={() => {
            console.log("help button");
          }}
          className="questionMark"
        >
          &#63;
        </button>
      </div>
    );

  return display;
};
