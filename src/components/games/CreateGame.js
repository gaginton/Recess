import React, { Component } from "react";
import { connect } from "react-redux";
import { createGame } from "../../store/actions/gameActions";
import { Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

const gameTypes = [
  {
    value: 1,
    attributeName: "Recess",
    label: "Classic Recess Games",
    iconClass: "rss-cone",
    group: "Recess"
  },
  {
    value: 2,
    attributeName: "Talent",
    label: "Talent Games",
    iconClass: "rss-cap",
    group: "Talent"
  },
  {
    value: 3,
    attributeName: "Sport",
    label: "Sports Games",
    iconClass: "rss-soccer",
    group: "Sport"
  },
  {
    value: 4,
    attributeName: "Digital",
    label: "Video Games",
    iconClass: "rss-remote",
    group: "Digital"
  },
  {
    value: 5,
    attributeName: "Party",
    label: "Party Games",
    iconClass: "rss-cup",
    group: "Party"
  },
  {
    value: 6,
    attributeName: "Tabletop",
    label: "Tabletop Games",
    iconClass: "rss-board",
    group: "Tabletop"
  }
];

export class CreateGame extends Component {
  state = {
    title: "",
    content: "",
    location: "",
    address: "",
    dateTime: "",
    minPlayers: 1,
    maxPlayers: 80,
    noTeams: 1,
    maxLength: "",
    minAge: "",
    players: [],
    equipment: "",
    isCoop: "",
    category: gameTypes[0]
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleDateChange = date => {
    this.setState({
      dateTime: date
    });
  };
  // handleGameTypeChange = category => {
  //   this.setState({
  //     category: category
  //   });
  // };
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

  handleSelectCategory = option => {
    this.setState({
      category: option
    });
  };

  render() {
    const { auth } = this.props;
    let gameError = null;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h4 className="bold">Create Public Game</h4>
          {/* ---------------- MANDATORY FIELDS ----------------------- */}
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
          <div className="input-field">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" onChange={this.handleChange} />
          </div>
          {/* <div className="input-field">
            <span className="small-text grey-text">
              Start Date and Time:{" "}
              <input
                type="datetime-local"
                id="dateTime"
                onChange={this.handleChange}
              />
            </span>
          </div> */}
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
            <Select
              value={this.state.category}
              onChange={this.handleSelectCategory}
              options={gameTypes}
            />
          </div>
          {/* ---------------- NOT-MANDATORY FIELDS ----------------------- */}
          <div className="row">
            <div className="col s12 m6">
              {/* ---------------- TEAM/COOP FIELDS ----------------------- */}
              <div className="grey-text text-darken-3">
                Team and Roster Layout
              </div>
              <div className="input-field">
                <label htmlFor="minPlayers">Minimum Players</label>
                <input
                  type="number"
                  id="minPlayers"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-field">
                <label htmlFor="maxPlayers">Maximum Players</label>
                <input
                  type="number"
                  id="maxPlayers"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-field">
                <label htmlFor="noTeams">Number of Teams</label>
                <input
                  type="number"
                  id="noTeams"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col s12 m6">
              {/* ---------------- ADDITIONAL FIELDS ----------------------- */}
              <div className="grey-text text-darken-3">
                Additional Fields <br />
              </div>
              <div className="input-field">
                <label htmlFor="maxLength">
                  Maximum Length of Game (Minutes)
                </label>
                <input
                  type="number"
                  id="maxLength"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-field">
                <label htmlFor="minAge">Minimum Age of Players</label>
                <input type="number" id="minAge" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="equipment">
                  Please bring to game (Equipment, fees, etc.)
                </label>
                <input
                  type="text"
                  id="equipment"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
            <div className="red-text center">
              {gameError ? <p>{gameError}</p> : null}
            </div>
          </div>
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
    createGame: game => dispatch(createGame(game))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateGame);
