import React, { Component } from "react";
import Notifications from "./Notifications";
import Chatroom from "../chatroom/Chatroom";
import GameList from "../games/GameList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { games, auth, notifications, messages } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6 opacity">
            <GameList games={games} />
          </div>
          <div className="col s12 m5 offset-m1 opacity">
            <Chatroom messages={messages} />
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.firestore.ordered.games,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
    messages: state.firestore.ordered.chatroom
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "games", orderBy: ["dateTime", "asc"] },
    { collection: "notifications", limit: 20, orderBy: ["time", "desc"] },
    { collection: "chatroom", limit: 20, orderBy: ["createdAt", "asc"] }
  ])
)(Dashboard);
