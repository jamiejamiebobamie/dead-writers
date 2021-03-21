import React from "react";
import "./quoteDiv.css";

export const quoteDiv = (quote, author) => (
  <div className="quoteContainer">
    <h3 className="quoteContent quote">{quote}</h3>
    <h4 className="quoteContent author">-{author}</h4>
  </div>
);
