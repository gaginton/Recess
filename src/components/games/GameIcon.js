import React from "react";
import LazyLoad from "react-lazy-load";

// Classic ???? 2. Talent Mic 3. Sports Ball 4. Video Games Controller 5. Party Cup 6. Tabletop & More Dice

const GameIcon = () => (
  <div className="card z-depth-0 list-container opacity">
    
    <div className="filler" />
    <LazyLoad height={100} width={100} className="mar-auto">
      <img src="http://clipart-library.com/images/6iy5nBAMT.png" alt="Sports Basketball" />
    </LazyLoad>

    {/* <LazyLoad height={50}>
      <img src="" />
    </LazyLoad> */}

    {/* <div className="filler" />
    <LazyLoad height={480} offsetHorizontal={50}>
      <img src="" />
    </LazyLoad>
    <div className="filler" />
    <LazyLoad
      height={720}
      onContentVisible={() => console.log("look ma I have been lazyloaded!")}
    >
      <img src="" />
    </LazyLoad>
    <div className="filler" /> */}
  </div>
);

export default GameIcon;
