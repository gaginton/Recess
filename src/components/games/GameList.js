import React from "react";
import GameSummary from "./GameSummary";
import { Link } from "react-router-dom";
import GameFilter from "./GameFilter"
import GameIcon from "./GameIcon";

const GameList = ({ games, filter }) => {
  let currentDate = new Date();

  const filterGames = (games) => {
    if (!filter) {
      console.log("NO FILTER")
      return games;
    }
    if (filter.title && filter.title.length > 0) {
      games = games.filter(game => game.title.toLowerCase().includes(filter.title.toLowerCase()));
    }
    if (filter.categories && filter.categories.length > 0) {
      games = games.filter(game => filter.categories.includes(game.category.toLowerCase()));
    }

    return games;
  }

  const createGameElement = (game) => (
  <Link to={"/game/" + game.id} key={game.id}>
    <div className="row mar-0">
      <div className="col-3 opacity mar-0 padRight-0">
        <GameIcon category={game.category} />
      </div>
      <div className="col-9 opacity mar-0 padLeft-0">
        <GameSummary game={{ ...game, id: game.id }} />
      </div>
    </div>
  </Link>);

  return (
    <React.Fragment>
      <GameFilter />
      <div className="game-list section">
        <div className="white-text">Available Games</div>
        {games && filterGames(games)
            .filter(game => {
              return currentDate <= game.dateTime.toDate();
            })
            .map(createGameElement)}
        <div className="white-text">Previous Games</div>
        {games &&
          games
            .filter(game => {
              return currentDate >= game.dateTime.toDate();
            })
            .map(createGameElement)}
      </div>
    </React.Fragment>
  );
};

export default GameList;
