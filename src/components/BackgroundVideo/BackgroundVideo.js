import React, { useState, useEffect, useRef } from "react";

import "./BackgroundVideo.css";

export const BackgroundVideo = ({ index }) => {
  const videoRef = useRef();
  let myVideo;
  const [duration, setDuration] = useState(null);
  useEffect(() => {
    myVideo = document.getElementById("backgroundVideo");
    videoRef.current = myVideo;
  }, []);

  return (
    <>
      <video
        src={`../../../assets/videos/${index}.mp4`}
        play="true"
        autoPlay
        muted
        loop
        id="backgroundVideo"
        playsInline
        className="dynamic"
        onLoadStart={(e) => {
          if (index !== 8)
            setTimeout(() => {
              let dur = videoRef.current.duration;
              setTimeout(() => {
                videoRef.current.setAttribute(
                  "src",
                  `../../../assets/videos/8.mp4`
                ); // Reset the video clip to idle.
              }, dur * 1000 - 500);
            }, 500);
        }}
      ></video>
      <video
        src={`../../../assets/videos/8.mp4`}
        play="true"
        autoPlay
        muted
        loop
        playsInline
        className="static"
      ></video>
    </>
  );
};
