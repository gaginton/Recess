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

  // function handleMouseOver() {
  //   ref.current.parentNode.style.zIndex = "1001";
  //   ref.current.style.zIndex = "1001";
  // }

  // function handleMouseOut() {
  //   ref.current.parentNode.style.zIndex = "0";
  //   ref.current.style.zIndex = "0";
  // }

  return (
    <div className="mapMarker"> 
      <div
        className={`mapMarker category-${gameCategory}`}
        lat={lat}
        lng={lng}
      />
      <Link
        key={gameId}
        // onMouseOver={handleMouseOver}
        // onMouseOut={handleMouseOut}
        to={"/game/" + gameId}
      >
        <p className="mapMarker-hoverBox" ref={ref} >
          {title} <br />
          {moment(dateTime.toDate()).calendar()}
        </p>
      </Link>
    </div>
  );
};

export default MapMarker;
