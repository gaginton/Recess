import React, { Component } from "react";
import GameList from "../games/GameList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Map extends Component {
  render() {
    const { games, auth } = this.props; //REMOVED MESSAGES SINCE USING SPOT.IM
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dashboard container">
        <div className="row">
          <h1 className="white">GOOGLE MAP WILL TAKE UP ENTIRE SCREEN</h1>
          {/* <div className="col s12 opacity">
            <GameList games={games} />
          </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.firestore.ordered.games,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "games", orderBy: ["dateTime", "asc"] }])
)(Map);
