import React from "react";
import GameSummary from "./GameSummary";
import { Link } from "react-router-dom";
import GameIcon from "./GameIcon";

const GameList = ({ games }) => {
  let currentDate = new Date();
  return (
    <div className="game-list section">
      <div className="white-text">Available Games</div>
      {games &&
        games
          .filter(game => {
            return currentDate <= game.dateTime.toDate();
          })
          .map(game => {
            return (
              <Link to={"/game/" + game.id} key={game.id}>
                <div className="row pad-0">
                  <div className="col s3 m3 pad-0">
                    <GameIcon />
                  </div>
                  <div className="col s9 m9 opacity pad-0">
                    <GameSummary game={game} />
                  </div>
                </div>
              </Link>
            );
          })}
      <div className="white-text">Previous Games</div>
      {games &&
        games
          .filter(game => {
            return currentDate >= game.dateTime.toDate();
          })
          .map(game => {
            return (
              <Link to={"/game/" + game.id} key={game.id}>
                <div className="row pad-0">
                  <div className="col s3 m3 pad-0">
                    <GameIcon />
                  </div>
                  <div className="col s9 m9 opacity pad-0">
                    <GameSummary game={game} />
                  </div>
                </div>
              </Link>
            );
          })}
    </div>
  );
};

export default GameList;
