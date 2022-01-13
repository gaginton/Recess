import React from "react";

const GameFooter = ({ authorFirstName, authorLastName, createdAt }) => {
    if (authorFirstName && authorLastName && createdAt) {
        return (
            <div className="card-action grey lighten-4 grey-text">
                <div>
                    Posted by: {authorFirstName} {authorLastName}
                </div>
                <div>{createdAt}</div>
            </div>
        );
    }
}

export default GameFooter;