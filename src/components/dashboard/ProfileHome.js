import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
// import { RecessInfo } from "../modals/RecessInfo";
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
        <div className="mapContainer text-white pad-50">
          <h1>Coming in Q1...</h1>
            <li>Customize your layout and settings</li>
            <li>"Standard game"</li>
            <li>Game scoring</li>
            <li>Push Notifications</li>
            <li>Google Calendar sync</li>
            <li>Private games</li>
            <li>User Profiles</li>
            <li>MUCH, MUCH MORE!</li>            
            Write to me at guyginton@gmail.com for feedback, suggestions and
            anything else.
            <br/>
          <Notifications
            notifications={notifications}
            initialModalState={false}
          />
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
