import React from "react";
import moment from "moment";


const GameDescription = ({ game }) => {
    if (!game) {
        return null;
    }

    const defaultMaxPlayers = 100;
    const displayMaxTime = game.maxLength ? (
        <p>Max game length: {game.maxLength} minutes</p>
    ) : null;
    const displayEquipment = game.equipment ? (
        <p>Players must bring: {game.equipment}</p>
    ) : null;
    const minPlayers = game.minPlayers ? game.minPlayers : 1;
    const maxPlayers = game.maxPlayers ? game.maxPlayers : defaultMaxPlayers;
    return (
        <div>
            <div className="card-title">
                {game.location} || {moment(game.dateTime.toDate()).calendar()}
                {/* {moment(game.dateTime).format("MMMM Do YYYY, h:mm:ss a")} */}
            </div>
            <p>Description: {game.content}</p>
            <p>Number of Players: {minPlayers} - {maxPlayers}{" "}</p>
            {displayMaxTime}
            {displayEquipment}
        </div >
    );
};

export default GameDescription;
