import React from "react";
import "./loadingMsgDiv.css";

export const loadingMsgDiv = () => (
  <>
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
    <h3 className="loadingMsg">generating...</h3>
  </>
);
