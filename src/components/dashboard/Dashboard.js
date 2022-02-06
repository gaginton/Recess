import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
// import { Redirect } from "react-router-dom";
// import Map from "../games/map/map";
import GameList from "../games/list/GameList";
// import Chatroom from "../chatroom/Chatroom";
// import GameFilter from "../games/filter/GameFilter";
import { RecessInfo } from "../modals/RecessInfo";
import { isGameValid, isClubValid } from "../../utils/utils";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { auth, clubs, games, filter } = this.props;

        return (
            <div className="dashboard container">
                <div className="row pad-0">
                    <div className="col opacity">
                        <GameList games={games} filter={filter} clubs={clubs} />
                    </div>
                </div>
                <RecessInfo initialModalState={false} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const clubs = state.firestore.ordered.clubs && state.firestore.ordered.clubs.filter(isClubValid);
    const games = state.firestore.ordered.games && state.firestore.ordered.games.filter(isGameValid);
    return {
        clubs: clubs,
        games: games,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications,
        messages: state.firestore.ordered.chatroom,
        filter: state.game.filter
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: "clubs", orderBy: ["dateTime", "asc"] },
        { collection: "games", orderBy: ["dateTime", "asc"] },
        { collection: "notifications", limit: 20, orderBy: ["time", "desc"] }
        // { collection: "chatroom", limit: 20, orderBy: ["createdAt", "asc"] }
    ])
)(Dashboard);
