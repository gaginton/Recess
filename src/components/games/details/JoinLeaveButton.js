import React, { Component } from "react";
import PropTypes from "prop-types";

class JoinLeaveButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { joined, toggleJoined } = this.props;
        console.log("join456: ", joined);
        return (
            <div>
                <span className="input-field" onClick={toggleJoined}>
                    {joined
                        ? <button
                            className="btn blue z-depth-0"
                        >JOIN</button>
                        : <button
                            className="btn blue z-depth-0"
                        >LEAVE</button>
                    }
                </span>
            </div>
        );
    };
};

JoinLeaveButton.propTypes = {
    joined: PropTypes.bool.isRequired,
    toggleJoined: PropTypes.func.isRequired
};

export default JoinLeaveButton;
