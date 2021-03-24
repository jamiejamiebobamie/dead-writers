import React, { useEffect } from "react";
import { BackgroundVideoContainer } from "./components";
import { ControlsContainer } from "./components";
import { QuoteDisplayContainer } from "./components";

import favicon from "-!file-loader!../assets/favicon.ico";

import "./App.css";

export const App = () => {
  useEffect(() => {
    const el = document.getElementById("favicon");
    el.href = favicon;
  }, []);

  return (
    <div className="App">
      <ControlsContainer />
      <BackgroundVideoContainer />
      <QuoteDisplayContainer />
    </div>
  );
};

export default App;
