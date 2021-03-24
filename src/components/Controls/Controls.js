import React from "react";
import { ControlButton } from "../ControlButton";
import "./Controls.css";

import bird from "-!file-loader!../../../assets/imgs/sprite_twitter_icon_39sprites_73by71tile.png";
import head from "-!file-loader!../../../assets/imgs/sprite_jar_icon_55sprites_129by130tile.png";

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
        fileName={bird}
        clickFunc={author ? tweetQuote : () => {}}
        title="Tweet it!"
        disabled={author ? false : true}
      />
      <ControlButton
        imgName="jar_image"
        fileName={head}
        clickFunc={() => {
          clearQuote();
          fetchQuote();
        }}
        title="click me"
      />
    </div>
  );
};
// before webpack
// fileName="assets/imgs/sprite_twitter_icon_39sprites_73by71tile.png"
// fileName="assets/imgs/sprite_jar_icon_55sprites_129by130tile.png"
