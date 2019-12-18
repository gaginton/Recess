import React from "react";
import { Link } from "react-router-dom";
import "./MapMarker.css";
import moment from "moment";

const MapMarker = ({
  lat,
  lng,
  title,
  content,
  gameId,
  gameCategory,
  dateTime
}) => (
  <Link to={"/game/" + gameId} key={gameId}>
    <div className={`mapMarker category-${gameCategory}`} lat={lat} lng={lng} />
    <p className="mapMarker-hoverBox">
      {title} <br />
      {moment(dateTime.toDate()).calendar()}
    </p>
  </Link>
);

export default MapMarker;
