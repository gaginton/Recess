import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
import { joinGame } from "../../store/actions/gameActions";
import { leaveGame } from "../../store/actions/gameActions";

const GameDetails = props => {
  const { game, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (game) {
    var displayPlayers = game.players ? (
      <p>
        Current players:{" "}
        {game.players
          .filter(function(e) {
            return e.replace(/(\r\n|\n|\r)/gm, "");
          })
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
    var maxPlayers = game.maxPlayers ? game.maxPlayers : 80;
    return (
      <div className="container section">
        <div className="game-details card z-depth-0 opacity">
          <div className="card-cont ent">
            <div className="card-title bold">{game.title}</div>
            <div className="card-title">
              {game.location} || {moment(game.dateTime.toDate()).calendar()}
              {/* {moment(game.dateTime).format("MMMM Do YYYY, h:mm:ss a")} */}
            </div>
            <p>{game.content}</p>
            <p>
              Total # of Players: {minPlayers} - {maxPlayers}{" "}
            </p>
            {displayPlayers} {displayMaxTime} {displayEquipment}
          </div>
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
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by: {game.authorFirstName} {game.authorLastName}
            </div>
            <div>{moment(game.createdAt.toDate()).calendar()}</div>
          </div>
          <div>
            <div
              data-spotim-module="recirculation"
              data-spot-id="sp_nmNmWmFj"
            />
            <script
              async
              src="https://recirculation.spot.im/spot/sp_nmNmWmFj"
            />
            <script
              async
              src="https://launcher.spot.im/spot/sp_nmNmWmFj"
              data-spotim-module="spotim-launcher"
              data-post-url={window.location.pathname}
              data-article-tags="Game" //WILL BE BASED ON CATEGORY LATER ON
              data-post-id={
                window.location.pathname.split("/")[
                  window.location.pathname.split("/").length - 1
                ]
              }
            />
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
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "games" }])
)(GameDetails);
