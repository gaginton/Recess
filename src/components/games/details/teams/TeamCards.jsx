import React, { useRef } from "react";
// import { Link } from "react-router-dom";
import "./TeamCards.css";
import { useState } from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import firebase from "firebase/compat/app";
// import moment from "moment";


// GET AVAIL PLAYERS
const Player = connect(state => state.players)(({ player, F }) => {
    const [playerDetails, setPlayerDetails] = useState();

    useEffect(
        () => {
            firebase.firestore().doc(`/users/${player}`).get().then(res => {
                setPlayerDetails(res.data());
            });
        }, []
    );

    if (!playerDetails) {
        return null;
    }

    return <div>
        <div>{playerDetails.firstName} {playerDetails.lastName}</div>
    </div>;
});

// SHOW TEAM DETAILS (TEAM NAME + PLAYERS)
function Team({ team }) {
    return <div>
        <div>{team.name}</div>
        <div>{team.players.map((player, i) => <Player player={player} key={i} />)}</div>
    </div>;
};

// SHOW AVAILABLE PLAYERS
function AvailablePlayers({ game, team }) {
    useEffect(() => {
        firebase.firestore().collection(`/games/${game.id}/players`).get().then(res => {
            const availablePlayers = res.docs.filter(doc => team.players.indexOf(doc.id) === -1);
            // console.log(availablePlayers.map(doc => doc.data()));
        });
    }, []);

    return <div>Available Players</div>;
};

const TeamCards = ({
    teams,
    game,
    gamePlayers,
    onChange
}) => {
    const ref = useRef();
    const [showAddPlayersModal, setShowAddPlayersModal] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState();


    function handleAddClick(team) {
        setShowAddPlayersModal(true);
        setSelectedTeam(team);
    };

    const displayPlayers = gamePlayers !== [] ? (
        <p>
          Players:{" "}
            {gamePlayers
                .filter(function (e) {
                    return e.name.replace(/(\r\n|\n|\r)/gm, "");
                })
                .map((user) => user.name)
                .join(", ")}{" "}
        </p>
    ) : null;

    // console.log("teams: ", teams);
    return (
        <div className=".teamCardContainer">
            {displayPlayers}
            {teams.map(team => <>
                <Team team={team} />
                <div>
                    <button onClick={handleAddClick.bind(null, team)}>Add Players</button>
                </div>
            </>)}
            {showAddPlayersModal && (
                <div className="addPlayersModal">
                    <AvailablePlayers game={game} team={selectedTeam} />
                </div>
            )}
        </div>
    );
};

export default TeamCards;
