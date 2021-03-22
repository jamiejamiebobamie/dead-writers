import React, { useEffect, useState } from "react";
import { BackgroundVideoContainer } from "./components";
import { ControlsContainer } from "./components";
import { QuoteDisplayContainer } from "./components";

import { isMobile } from "react-device-detect";

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
