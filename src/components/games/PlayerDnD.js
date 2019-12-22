import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PlayerCard from "./PlayerCard";

const PlayerDnD = props => {
  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");
    const card = document.getElementById(card_id);
    card.style.display = "block";
    e.target.appendChild(card);
  };
  const dragOver = e => {
    e.preventDefault();
  };
  const { game, auth } = props;
  //   AUTHOR SHOULD BE GAME CREATOR OR ON LIST OF ADMIN
  if (!auth.uid) return <Redirect to="/signin" />;
  if (game) {
    // var displayPlayers = game.players ? (
    //   <p>
    //     Current players:{" "}
    //     {game.players
    //       .filter(function(e) {
    //         return e.replace(/(\r\n|\n|\r)/gm, "");
    //       })
    //       .join(", ")}{" "}
    //   </p>
    // ) : null;
    // CREATE 1 PLAYER DND PER game.noTeams. So if 2, should have 2. If null, make as many teams as players.
    return (
      <div className="container section flexbox">
        <div
          id={props.id}
          onDrop={drop}
          onDragOver={dragOver}
          className={props.className}
        >
          <PlayerCard id="playerCard-1" className="playerCard" draggable="true">
            <p>Card One</p>
          </PlayerCard>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading Players...</p>
      </div>
    );
  }
};

// const mapStateToProps = (state, ownProps) => {
//   const id = ownProps.match.params.id;
//   const games = state.firestore.data.games;
//   const game = games ? games[id] : null;
//   return {
//     game: game,
//     auth: state.firebase.auth
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     saveTeams: game => dispatch(joinGame(game)),
//   };
// };

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "games" }])
)(PlayerDnD);
