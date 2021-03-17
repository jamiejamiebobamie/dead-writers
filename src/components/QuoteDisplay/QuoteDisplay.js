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
          marginRight: "20px",
          marginTop: "10px",
          color: "#e2e157",
          position: "absolute",
          right: "0px",
          fontFamily: "Optima, sans-serif",
        }}
      >
        x
      </button>
      <div className="quoteContainer">
        <h3 className="quoteContent">Hi these are some words</h3>
      </div>
    </div>
  );
};
// useEffect(() => {
//
// }, []);
// {smudges}
