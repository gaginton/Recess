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
            // console.log(game);
            return (
              <Link to={"/game/" + game.id} key={game.id}>
                <div className="row mar-0">
                  <div className="col-3 opacity mar-0 padRight-0">
                    <GameIcon />
                  </div>
                  <div className="col-9 opacity mar-0 padLeft-0">
                    <GameSummary game={{ ...game, id: game.id }} />
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
                <div className="row mar-0">
                  <div className="col-3 m3 mar-0 padRight-0">
                    <GameIcon />
                  </div>
                  <div className="col-9 m9 opacity mar-0 padLeft-0">
                    <GameSummary game={{ ...game, id: game.id }} />
                  </div>
                </div>
              </Link>
            );
          })}
    </div>
  );
};

export default GameList;
