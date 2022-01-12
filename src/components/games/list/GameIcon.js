import React from "react";
import LazyLoad from "react-lazy-load";
import GameTypes from "../GameTypes";

// 1. Classic Squid 2. Talent Mic 3. Sports Ball 
// 4. Video Games Controller 5. Party Cup 6. Tabletop & More Dice



const GameIcon = ( { category } ) => {
  const gameCat = GameTypes.find( ( gameType ) => {
    return gameType.value === category
  })
  return (
  <div className="card z-depth-0 list-container opacity">
    
    <div className="filler" />
    <LazyLoad 
      height={100}
      width={100}
      className="mar-auto"
      >
      <img src={gameCat.src} alt={gameCat.label} />
    </LazyLoad>
  </div>
)};




export default GameIcon;
