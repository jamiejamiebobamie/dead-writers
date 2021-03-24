import React, { useEffect, useRef } from "react";
import "./BackgroundVideo.css";

// for webpack
import zero from "-!file-loader!../../../assets/videos/0.mp4";
import one from "-!file-loader!../../../assets/videos/1.mp4";
import two from "-!file-loader!../../../assets/videos/2.mp4";
import three from "-!file-loader!../../../assets/videos/3.mp4";
import four from "-!file-loader!../../../assets/videos/4.mp4";
import five from "-!file-loader!../../../assets/videos/5.mp4";
import six from "-!file-loader!../../../assets/videos/6.mp4";
import seven from "-!file-loader!../../../assets/videos/7.mp4";
import eight from "-!file-loader!../../../assets/videos/8.mp4";

export const BackgroundVideo = ({ index, addVideoPlayIndex }) => {
  const videoLookup = {
    0: zero,
    1: one,
    2: two,
    3: three,
    4: four,
    5: five,
    6: six,
    7: seven,
    8: eight,
  };
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
        src={videoLookup[index]}
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
        play="true"
        src={eight}
        autoPlay
        muted
        loop
        playsInline
        className="static"
      ></video>
    </>
  );
};

// before webpack:
// dynamic
// src={`../../../assets/videos/${index}.mp4`}
// static
// src={`../../../assets/videos/8.mp4`}
