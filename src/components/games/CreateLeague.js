import React, { Component } from "react";
import { connect } from "react-redux";
// import { createGame } from "../../store/actions/gameActions";
import { Redirect } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import Select from "react-select";
import CreateGame from "./CreateGame";
import Select from "react-select";
import DatePicker from "react-datepicker";
import GameTypes from "./GameTypes";

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
  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.title !== "" &&
      this.state.content !== "" &&
      this.state.location !== "" &&
      this.state.dateTime !== ""
    ) {
      this.props.createGame(this.state);
      this.props.history.push("/");
    } else return (this.gameError = "Mandatory fields missing!");
  };
  render() {
    const { auth } = this.props;
    let gameError = null;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        {/* FORM 1 - MANDATORY FIELDS*/}
        <form className="white" onSubmit={this.handleSubmit}>
          <h4 className="bold">Choose Game</h4>
          <div>Reuse var GameTypes currently in CreateGame.js</div>
          <Select
            value={this.state.category}
            onChange={this.handleSelectCategory}
            options={GameTypes}
          />
          <div>
            Then link the game title, description and locations to a local
            state. Change location to array if multiple locations.
          </div>
          <div className="grey-text text-darken-3">
            * Title, description, location and start date/time are neccessary
            fields. <br />
            All other fields may be left blank, if not applicable.
          </div>
          <div className="input-field">
            <label htmlFor="title">
              * Game Title (Ex: Football, Tag, DnD, Beer Pong)
            </label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">
              * Game Description (Ex: Full court, Shirts vs Skins, Beginners
              Welcome, 10 cup)
            </label>
            <textarea
              className="materialize-textarea"
              id="content"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="location">
              * Location (Ex: Central Park, XBox Live, Mobile)
            </label>
            <input type="text" id="location" onChange={this.handleChange} />
          </div>
          <div>
            HAVE TO CHANGE TO A PICKER THAT ALLOWS YOU TO PICK MULTIPLE DAYS
          </div>
          <div className="input-field">
            <DatePicker
              // id="gameDateTimeSelector"
              selected={
                this.state.dateTime ? new Date(this.state.dateTime) : null
              }
              onChange={this.handleDateChange}
              minDate={new Date()}
              placeholderText="* Start Date and Time"
              showTimeInput
              // showMonthDropdown
              timeInputLabel="Time:"
              dateFormat="MM/dd/yyyy h:mm aa"
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
            <div className="red-text center">
              {gameError ? <p>{gameError}</p> : null}
            </div>
          </div>
        </form>
        {/* FORM 2 - CHOOSE LEAGUE OPTIONS */}
        <form className="yellow" onSubmit={this.handleSubmit}>
          <h4 className="bold">Create League Schedule</h4>
          <div>The following fields will default based on the game chosen.</div>
          <div>Pick the max length of a match, if appt.</div>
          <div>Pick the number of matches per round, if appt.</div>
          <div>
            Pick the max length of rounds. A round is how long one set of
            opponents play.
          </div>
          <div>
            Pick the logic of advancing between rounds. Elimination or matched
            pairing.
          </div>
          <div>Pick frequency of games if they reccur over multiple days.</div>
        </form>
        {/* FORM 3 - CUSTOMIZATION OPTIONS */}
        <form className="orange" onSubmit={this.handleSubmit}>
          <h4 className="bold">Modify Game Rules:</h4>
          <div>
            This should update based on the game chosen in the first drawer.
          </div>
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
