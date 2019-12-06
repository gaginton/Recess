import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { RecessInfo } from "../modals/RecessInfo";
import Notifications from "../dashboard/Notifications";

class ProfileHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <React.Fragment>
        <div className="mapContainer padLeft-20">
          <h1 className="text-white">Coming Soon...</h1>
          <p className="text-white">
            In Q1 Recess will add: Customize your layout and settings, game tags
            (FPS, free for all, Xbox etc.) Game Scoring, Notifications, Private
            Game, User Profiles and much more!
            <br />
            Write to me at guyginton@gmail.com for feedback, suggestions and
            anything else.
          </p>
          <Notifications
            notifications={notifications}
            initialModalState={false}
          />

          <RecessInfo initialModalState={false} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
    games: state.firestore.ordered.games,
    messages: state.firestore.ordered.chatroom
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    // { collection: "games", orderBy: ["dateTime", "asc"] },
    { collection: "notifications", limit: 20, orderBy: ["time", "desc"] }
  ])
)(ProfileHome);
