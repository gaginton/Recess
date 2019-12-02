import React, { Component } from "react";
// import GameList from "../games/GameList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { RecessInfo } from "../modals/RecessInfo";
import Notifications from "../dashboard/Notifications";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { games, auth, notifications, viewStyle } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dashboard container">
        <div className="row">
          <h1 className="white">GOOGLE MAP WILL TAKE UP ENTIRE SCREEN</h1>
          {/* <GameList games={games} */}
        </div>
        <Notifications
          notifications={notifications}
          initialModalState={false}
        />
        <RecessInfo initialModalState={false} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.firestore.ordered.games,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
    messages: state.firestore.ordered.chatroom,
    viewStyle: state.viewStyle
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "games", orderBy: ["dateTime", "asc"] },
    { collection: "notifications", limit: 20, orderBy: ["time", "desc"] }
  ])
)(Map);
