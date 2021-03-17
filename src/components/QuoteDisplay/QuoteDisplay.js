import React, { useState, useEffect } from "react";

import "./QuoteDisplay.css";

export const QuoteDisplay = (props) => {
  return (
    <div className="QuoteDisplay">
      <button
        style={{
          backgroundColor: "transparent",
          borderColor: "transparent",
          fontSize: "3vw",
          marginRight: "2vw",
          marginTop: "10px",
          color: "#e2e157",
          position: "absolute",
          right: "0px",
          fontFamily: "monospace",
        }}
      >
        x
      </button>
      <div className="quoteContainer">
        <h3 className="quoteContent">
          {props.quote}
          <h4 className="quoteContent author">-{props.author}</h4>
        </h3>
      </div>
    </div>
  );
};
// useEffect(() => {
//
// }, []);
// {smudges}

// Yet do I may speak; the world that which seems as my poor name
// rehearse? And shall in walls of mine own life And I will seek (my
// weary travel’s end) Doth homage to stop any Syracusian born Come then
// you fled from many quirks of a lawful race, Which you are my sake even
// I my soul Doth half so fair a dame to make a sovereign to the Capitol.
