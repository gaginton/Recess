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
import { isGameValid } from "../../utils/utils";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { games, auth, filter } = this.props;

        console.log('Dashboard games =>', games);

        return (
            <div className="dashboard container">
                <div className="row pad-0">
                    <div className="col opacity">
                        <GameList games={games} filter={filter} />
                    </div>
                </div>
                <RecessInfo initialModalState={false} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const games = state.firestore.ordered.games && state.firestore.ordered.games.filter(isGameValid);
    return {
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
        { collection: "games", orderBy: ["dateTime", "asc"] },
        { collection: "notifications", limit: 20, orderBy: ["time", "desc"] }
    // { collection: "chatroom", limit: 20, orderBy: ["createdAt", "asc"] }
    ])
)(Dashboard);
