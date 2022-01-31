import React from "react";

export const SubmitGame = (props) => {
    if (props.isVisible === false) {
        return null;
    }

    return (
        <div>
            <h2 className="bold">Read Terms and Create Game</h2>
            <div className="grey-text text-darken-3">
                <li>Note, by clicking "Create Game" you are creating a PUBLIC game.</li>
                <li>Public games are visible to all Recess users. </li>
                <li>Do not provide personal info.</li>
                <li>Do not use this app if you are under 18 years old.</li>
            </div>
            <div className="input-field">
                <button
                    className="btn pink lighten-1 z-depth-0"
                    onSubmit={props.handleSubmit}
                >
                    Create Game
                </button>
            </div>
        </div>
    );
};

export default SubmitGame;
