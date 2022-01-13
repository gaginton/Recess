import React from "react";

const GameFooter = ({ game, createdAt }) => {
    if (game) {
        return (
            <div className="card-action grey lighten-4 grey-text">
                <div>
                    Posted by: {game.authorFirstName} {game.authorLastName}
                </div>
                <div>{createdAt}</div>
            </div>
        );
    }
}

export default GameFooter;