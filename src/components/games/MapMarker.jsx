import React, { useRef } from "react";
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
}) => {
  const ref = useRef();

  function handleMouseOver() {
    ref.current.parentNode.style.zIndex = "1";
  }

  function handleMouseOut() {
    ref.current.parentNode.style.zIndex = null;
  }

  return (
    <Link
      to={"/game/" + gameId}
      key={gameId}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div
        className={`mapMarker category-${gameCategory}`}
        lat={lat}
        lng={lng}
        ref={ref}
      />
      <p className="mapMarker-hoverBox">
        {title} <br />
        {moment(dateTime.toDate()).calendar()}
      </p>
    </Link>
  );
};

export default MapMarker;
