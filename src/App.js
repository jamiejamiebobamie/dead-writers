import React from "react";
import { BackgroundVideoContainer } from "./components";
import { ControlsContainer } from "./components";
import { QuoteDisplayContainer } from "./components";

import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <ControlsContainer />
      <BackgroundVideoContainer />
      <QuoteDisplayContainer />
    </div>
  );
};

export default App;
