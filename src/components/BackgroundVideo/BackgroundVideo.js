import React, { useState } from "react";

import "./BackgroundVideo.css";

export const BackgroundVideo = ({ index }) => {
  console.log(index);
  return (
    <video
      src={`../../../assets/videos/${index}.mp4`}
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
