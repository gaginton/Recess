import React, { Component } from "react";
import { connect } from "react-redux";
// import { createGame } from "../../store/actions/gameActions";
import { Redirect } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import Select from "react-select";
import CreateGame from "./CreateGame";

export class CreateLeague extends Component {
  state = {
    numOfMatches: "",
    gameDates: "",
    region: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { auth } = this.props;
    let gameError = null;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h4 className="bold">Choose Game</h4>
          <h4 className="bold">Create League Schedule</h4>
          <h4 className="bold">Modify Game Rules</h4>
          <CreateGame />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // createGame: game => dispatch(createGame(game))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateLeague);
