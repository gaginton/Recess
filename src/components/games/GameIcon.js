import React from "react";
import LazyLoad from "react-lazy-load";

const GameIcon = () => (
  <div className="card z-depth-0 list-container opacity">
    <div className="filler" />
    <LazyLoad height={100} width={100} className="mar-auto">
      <img src="http://clipart-library.com/images/6iy5nBAMT.png" alt="" />
    </LazyLoad>
    {/* <LazyLoad height={50}>
      <img src="http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif" />
    </LazyLoad> */}
    {/* <div className="filler" />
    <LazyLoad height={480} offsetHorizontal={50}>
      <img src="http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif" />
    </LazyLoad>
    <div className="filler" />
    <LazyLoad
      height={720}
      onContentVisible={() => console.log("look ma I have been lazyloaded!")}
    >
      <img src="http://apod.nasa.gov/apod/image/1502/ToadSky_Lane_1080_annotated.jpg" />
    </LazyLoad>
    <div className="filler" /> */}
  </div>
);

export default GameIcon;
