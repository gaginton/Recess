import React, { Component } from "react";
import { connect } from "react-redux";
import { createMessage } from "../../store/actions/chatActions";
import { Redirect } from "react-router-dom";

export class CreateMessage extends Component {
    state = {
        message: ""
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createMessage(this.state);
        this.setState({ message: "" });
        document.getElementById("message").value = "";
    };
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to="/signin" />;

        return (
            <div className="container no-margin">
                <form className="white" onSubmit={this.handleSubmit}>
                    <div className="message-input">
                        <div className="input-field">
                            <label htmlFor="message">Message</label>
                            <input
                                type="text"
                                className="materialize-textarea"
                                id="message"
                                onChange={this.handleChange}
                            />
                        </div>
                        <button className="btn pink lighten-1 z-depth-0">Send</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createMessage: (message) => dispatch(createMessage(message))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateMessage);
