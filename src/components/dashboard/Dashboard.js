import React, { Component } from "react";
import Notifications from "./Notifications";
// import Chatroom from "../chatroom/Chatroom";
import GameList from "../games/GameList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import Map from "../games/map";
import { RecessInfo } from "../modals/RecessInfo";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { games, auth, notifications, viewStyle } = this.props; //REMOVED MESSAGES SINCE USING SPOT.IM
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dashboard container">
        <div className="row pad-0">
          {viewStyle != "mapStyle" && (
            <div className="col opacity">
              <GameList games={games} />
            </div>
          )}
          {viewStyle == "mapStyle" && (
            <div className="col opacity">
              <Map games={games} />
            </div>
          )}
        </div>

        {/* <div className="row pad-0">
          <div className="col s12 opacity">
            <Chatroom messages={messages} />
          </div>
        </div> */}
        <div className="row pad-0">
          <div className="col s12 opacity">
            <Notifications notifications={notifications} />
          </div>
        </div>
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
    // { collection: "chatroom", limit: 20, orderBy: ["createdAt", "asc"] }
  ])
)(Dashboard);
