import React from "react";

import { ControlButton } from "../ControlButton/ControlButton";

import "./Controls.css";

export const Controls = (props) => {
  return (
    <div className="Controls">
      <ControlButton
        buttonType="Tweet"
        imgName="tweet_image"
        fileName="assets/imgs/sprite_twitter_icon_39sprites_73by71tile.png"
      />
      <ControlButton
        buttonType="Jar"
        imgName="jar_image"
        fileName="assets/imgs/sprite_jar_icon_55sprites_129by130tile.png"
      />
    </div>
  );
};