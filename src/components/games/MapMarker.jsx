import React from "react";
import { Link } from "react-router-dom";
import "./MapMarker.css";

const MapMarker = ({ lat, lng, title, content, gameId, gameCategory }) => (
  <Link to={"/game/" + gameId} key={gameId}>
    <div className={`mapMarker category-${gameCategory}`} lat={lat} lng={lng}>
      <p>{title}</p>
    </div>
  </Link>
);

export default MapMarker;
