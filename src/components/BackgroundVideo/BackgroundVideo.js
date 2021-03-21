import React, { useEffect, useRef } from "react";
import "./BackgroundVideo.css";

export const BackgroundVideo = ({ index, addVideoPlayIndex }) => {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current = document.getElementById("backgroundVideo");
  }, [index]); // lookup passing in a callback function to useEffect
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
          if (index !== 8) {
            if (index === 7) {
              setTimeout(() => {
                let dur = videoRef.current.duration;
                setTimeout(() => {
                  // boot the user to twitter
                  window.location.href = "https://twitter.com/writers_dead";
                }, dur * 1000 - 500);
              }, 500);
            } else {
              setTimeout(() => {
                let dur = videoRef.current.duration;
                setTimeout(() => {
                  // Reset the video clip to idle.
                  addVideoPlayIndex({ author: "idle" });
                }, dur * 1000 - 500);
              }, 500);
            }
          }
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
