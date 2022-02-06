import React from "react";

export const ClubFields = (props) => {
    if (props.isVisible === false) {
        return null;
    }

    return (
        <div>
            <h2 className="bold">Club Fields</h2>
            <div className="input-field">
                <label htmlFor="title">
                    * Club Title (Ex: Tel Aviv Football, Chess Worldwide, Techno Fans)
                </label>
                <input
                    type="text"
                    id="title"
                    onChange={props.handleChange}
                    value={props.title}
                    maxLength="150"
                />
            </div>
            <div className="input-field">
                <label htmlFor="description">
                    * Club Description (Rules, Expectations etc.)
                </label>
                <textarea
                    className="materialize-textarea"
                    id="description"
                    onChange={props.handleChange}
                    value={props.description}
                    maxLength="999"
                    style={{ overflowX: "hidden", wordWrap: "break-word", height: 80 + "PX" }}
                />
            </div>
            <div className="input-field">
                <label htmlFor="minAge">
                    * Minimum Age
                </label>
                <input
                    type="number"
                    id="minAge"
                    onChange={props.handleChange}
                    value={props.minAge}
                    min="18"
                    max="99"
                />
            </div>
        </div>
    );
};

export default ClubFields;
