import React from "react";
import moment from "moment";

const GameSummary = ({ game }) => {
  return (
    <div className="card z-depth-0 game-summary">
      <div className="card-content grey-text text-darken-3">
        <div className="card-title bold">{game.title.substring(0, 32)}</div>
        <div>@{game.location.substring(0, 32)}</div>
        <div>Start: {moment(game.dateTime.toDate()).calendar()}</div>
        <div className="grey-text small-text">
          Host: {game.authorFirstName} {game.authorLastName}{" "}
        </div>
      </div>
    </div>
  );
};

export default GameSummary;
