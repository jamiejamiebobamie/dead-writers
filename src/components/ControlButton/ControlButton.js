import React from "react";

import "./ControlButton.css";

export const ControlButton = (props) => {
  return (
    <button className={"ControlButton"}>
      <div
        alt="a head floating in a jar"
        className={props.imgName}
        id={props.buttonType}
        style={{
          background: `url(${props.fileName})`,
        }}
      />
    </button>
  );
};
