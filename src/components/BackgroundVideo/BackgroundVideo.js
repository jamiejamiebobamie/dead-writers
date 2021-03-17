import React, { useState } from "react";

import "./BackgroundVideo.css";

export const BackgroundVideo = (props) => {
  const [num, changeNum] = useState(8);

  return (
    <video
      onClick={() => {
        changeNum(num < 8 ? num + 1 : 0);
      }}
      src={`../../../assets/videos/${num}.mp4`}
      play="true"
      autoPlay
      muted
      loop
      id="backgroundVideo"
      playsInline
      className="BackgroundVideo"
    ></video>
  );
};
