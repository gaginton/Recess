import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import firebase from "firebase/app";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
import { joinGame } from "../../store/actions/gameActions";
import { leaveGame } from "../../store/actions/gameActions";
import TeamCards from "../teams/TeamCards"

const GameDetails = props => {
  const { game, auth } = props;
  const [gamePlayers, setGamePlayers] = useState([]);

  useEffect(() => {
    if (!game) {
      return;
    }

    // console.log({ game });

    return firebase
      .firestore()
      .collection(`/games/${game.id}/players`)
      .onSnapshot(res => {
        setGamePlayers(res.docs.map(doc => doc.data()));
      });
  }, [game]);

  function handleTeamsChange(newTeams) {
    console.log(newTeams);
  }

  if (!auth.uid) return <Redirect to="/signin" />;
  if (game) {
    var displayPlayers = game.players ? (
      <p>
        Players:{" "}
        {gamePlayers
          .filter(function(e) {
            return e.name.replace(/(\r\n|\n|\r)/gm, "");
          })
          .map(user => user.name)
          .join(", ")}{" "}
      </p>
    ) : null;
    var displayMaxTime = game.maxLength ? (
      <p>Max game length: {game.maxLength} minutes</p>
    ) : null;
    var displayEquipment = game.equipment ? (
      <p>Players must bring: {game.equipment}</p>
    ) : null;
    var minPlayers = game.minPlayers ? game.minPlayers : 1;
    var maxPlayers = game.maxPlayers ? game.maxPlayers : 20;
    return (
      <div className="container section">
        <div className="game-details card z-depth-0 opacity">
          <div className="card-cont ent">
            {/* HEADER ROW WITH TITLE */}
            <div className="card-title bold">{game.title}</div>
            {/* COL 1 GAME INFO*/}
            <div className="row">
              <div className="col-6">
                <div className="card-title">
                  {game.location} || {moment(game.dateTime.toDate()).calendar()}
                  {/* {moment(game.dateTime).format("MMMM Do YYYY, h:mm:ss a")} */}
                </div>
                <p>Description: {game.content}</p>
                <p>
                  Number of Players: {minPlayers} - {maxPlayers}{" "}
                </p>
                {displayPlayers} {displayMaxTime} {displayEquipment}
                <div className="gameActionButtonContainer">
                  <span className="input-field">
                    <button
                      className="btn blue z-depth-0"
                      onClick={() => props.joinGame(game)}
                    >
                      JOIN
                    </button>
                  </span>

                  <span className="input-field leaveGameButton">
                    <button
                      className="btn blue z-depth-0"
                      onClick={() => props.leaveGame(game)}
                    >
                      LEAVE
                    </button>
                  </span>
                </div>
              </div>
              {/* COL 2 */}
              <div className="col-6">
                <div className="card-title">Arrange Teams:</div>
                <TeamCards game={game} teams={game.teams} onChange={handleTeamsChange}/>
              </div>
            </div>
          </div>
          {/* FOOTER GOES HERE */}
          <div className="spotim container">
            <div className="bold">Discuss this Game</div>
            {/* REMOVED SPOT.IM  */}
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by: {game.authorFirstName} {game.authorLastName}
            </div>
            <div>{moment(game.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading Game...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const games = state.firestore.data.games;
  const game = games ? games[id] : null;
  return {
    game: game,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    joinGame: game => dispatch(joinGame(game)),
    leaveGame: game => dispatch(leaveGame(game))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "games" }])
)(GameDetails);
