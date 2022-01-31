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
                <div className="container">
                    <form className="white">
                        <div className="row">
                            <div className="col s12 m4">
                                <h2>Q1 Plans: Service</h2>
                                <ol>
                                    <li>Create PLAYERS</li>
                                    <li>Create CLUBS</li>
                                    <li>Create GAMES</li>
                                    <li>Create TOURNAMENTS</li>
                                    <li>Create EVENTS</li>
                                    <li>Create SKILLS</li>
                                </ol>
                            </div>

                            <div className="col s12 m4">
                                <h2>Q2 Plans: Convenience</h2>
                                <ol>
                                    <li>Push Notifications</li>
                                    <li>Email Notifications</li>
                                    <li>Invite friends</li>
                                    <li>Google Calendar Sync</li>
                                    <li>Customize layout and settings</li>
                                </ol>
                            </div>

                            <div className="col s12 m4">
                                <h2>Q3 Plans: Scoring</h2>
                                <ol>
                                    <li>Advanced user profiles</li>
                                    <li>End game to set play length</li>
                                    <li>Mark GAME wins & losses</li>
                                    <li>Chess score / game</li>
                                    <li>Game popularity on app</li>
                                </ol>
                            </div>
                        </div>

                        <div>Write to me at guyginton@gmail.com for feedback, suggestions and anything else.</div>
                        <br />
                        <br />
                        <Notifications
                            notifications={notifications}
                            initialModalState={false}
                        />
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
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
