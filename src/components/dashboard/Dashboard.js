import React, { Component } from "react";
// import Chatroom from "../chatroom/Chatroom";
import GameList from "../games/GameList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
// import Map from "../games/map";
import { RecessInfo } from "../modals/RecessInfo";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { games, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dashboard container">
        <div className="row pad-0">
          <div className="col opacity">
            <GameList games={games} />
          </div>
        </div>

        {/* <div className="row pad-0">
          <div className="col s12 opacity">
            <Chatroom messages={messages} />
          </div>
        </div> */}
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
    messages: state.firestore.ordered.chatroom
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
