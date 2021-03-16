import React from "react";

import "./ControlButton.css";

export const ControlButton = (props) => {
  return (
    <button className={`ControlButton`}>
      <div
        alt="a head floating in a jar"
        className={props.imgName}
        style={{
          background: `url(${props.fileName})`,
        }}
      />
    </button>
  );
};
