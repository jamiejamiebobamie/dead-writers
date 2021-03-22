import React, { useEffect, useRef } from "react";
import "./BackgroundVideo.css";

export const BackgroundVideo = ({ index, addVideoPlayIndex }) => {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current = document.getElementById("backgroundVideo");
  }, [index]);
  // the video pops when it loads a new video for src.
  // the 'static' video plays the idle clip on loop behind the 'dynamic' video
  // to hide the transition.
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
          // 'onEnded' video attribute was not working for some reason.

          // this uses two nested timeOuts to reset the video back to idle after
          // a video other than idle (index !== 8) is done playing.

          // the first timeout waits for the mounted DOM element to initialize
          // and then grabs the video's duration attribute
          // to set the next timeOut.

          // if the video is the exit video, send the user to the dead_writers
          // twitter acount.
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
