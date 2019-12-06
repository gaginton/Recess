import React from "react";
import { Link } from "react-router-dom";
import "./MapMarker.css";

const MapMarker = ({ lat, lng, title, content, gameId, gameCategory }) => (
  <Link to={"/game/" + gameId} key={gameId}>
    <div className={`mapMarker category-${gameCategory}`} lat={lat} lng={lng} />
    <p className="mapMarker-hoverBox">{title}</p>
  </Link>
);

export default MapMarker;
