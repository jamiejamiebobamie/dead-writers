import React, { useState } from "react";

import { ControlButton } from "../ControlButton/ControlButton";

import "./Controls.css";

export const Controls = ({
  fetchQuote,
  tweetQuote,
  clearQuote,
  quote,
  author,
}) => {
  const [firstQuoteNotFetched, setFirstQuoteNotFetched] = useState(true);
  return (
    <div className="Controls">
      <ControlButton
        buttonType="Tweet"
        imgName={quote ? "tweet_image fly" : "tweet_image"}
        fileName="assets/imgs/sprite_twitter_icon_39sprites_73by71tile.png"
        clickFunc={author === null ? () => {} : tweetQuote}
        title="Tweet it!"
        disabled={author === null ? true : false}
      />
      <ControlButton
        buttonType="Jar"
        imgName={firstQuoteNotFetched ? "jar_image pulse" : "jar_image"}
        fileName="assets/imgs/sprite_jar_icon_55sprites_129by130tile.png"
        clickFunc={() => {
          setFirstQuoteNotFetched(false);
          clearQuote();
          fetchQuote();
        }}
        title="Generate quote!"
      />
    </div>
  );
};
