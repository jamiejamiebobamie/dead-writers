import React from "react";
import "./aboutInfoDiv.css";

export const aboutInfoDiv = () => {
  const FULL_NAME_LOOKUP = {
    Grimm: "The Brother's Grimm",
    Poe: "Edgar Alan Poe",
    Wilde: "Oscar Wilde",
    Woolf: "Virginia Woolf",
    Carroll: "Lewis Carroll",
    Shakespeare: "William Shakespeare",
    Lovecraft: "HP Lovecraft",
  };
  const words = `This is a quote generator.
  New text is generated from the original works of the
  authors to the right using their word frequency.`;
  const authors = Object.values(FULL_NAME_LOOKUP).map((value) => {
    return <li key={value}>{value}</li>;
  });
  return (
    <div className="aboutDiv">
      <h1>About</h1>
      <div className="innerDiv">
        <p>{words}</p>
        <ul>{authors}</ul>
      </div>
    </div>
  );
};
