import React from "react";
import { BackgroundVideoContainer } from "./components";
import { ControlsContainer } from "./components";

import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <ControlsContainer />
      <BackgroundVideoContainer />
    </div>
  );
};

export default App;
