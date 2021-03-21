import React from "react";

import "./ControlButton.css";

export const ControlButton = (props) => {
  const buttonInteractionClass = props.disabled ? "disabled" : "enabled";
  return (
    <button
      className={`ControlButton ${buttonInteractionClass}`}
      onClick={() => props.clickFunc()}
    >
      <div
        title={props.title}
        className={`${props.imgName}`}
        id={props.buttonType}
        style={{
          background: `url(${props.fileName})`,
        }}
      />
    </button>
  );
};
