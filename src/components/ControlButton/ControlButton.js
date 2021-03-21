import React from "react";

import "./ControlButton.css";

export const ControlButton = ({
  disabled,
  clickFunc,
  imgName,
  fileName,
  title,
}) => {
  const buttonInteractionClass = disabled ? "disabled" : "enabled";
  return (
    <button
      className={`ControlButton ${buttonInteractionClass}`}
      onClick={() => clickFunc()}
    >
      <div
        title={title}
        className={`${imgName}`}
        style={{
          background: `url(${fileName})`,
        }}
      />
    </button>
  );
};
