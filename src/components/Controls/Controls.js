import React from "react";
import { ControlButton } from "../ControlButton/ControlButton";
import "./Controls.css";

export const Controls = ({
  fetchQuote,
  tweetQuote,
  clearQuote,
  author,
  index,
}) => {
  const exitVideoIsPlaying = index === 7;
  return (
    <div className="Controls">
      <ControlButton
        imgName={
          author || exitVideoIsPlaying ? "tweet_image fly" : "tweet_image"
        }
        fileName="assets/imgs/sprite_twitter_icon_39sprites_73by71tile.png"
        clickFunc={author ? tweetQuote : () => {}}
        title="Tweet it!"
        disabled={author ? false : true}
      />
      <ControlButton
        imgName="jar_image"
        fileName="assets/imgs/sprite_jar_icon_55sprites_129by130tile.png"
        clickFunc={() => {
          clearQuote();
          fetchQuote();
        }}
        title="click me"
      />
    </div>
  );
};
