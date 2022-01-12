import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import MandatoryFields from "./MandatoryFields";
import OptionalFields from "./OptionalFields";
import LeagueFields from "./LeagueFields";
import SubmitGame from "./SubmitGame";
// import { createGame } from "../../store/actions/gameActions";


export class CreateLeague extends Component {
  constructor(props) {
    super(props);
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }
  _next() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }
  _prev() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }
  get previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    return null;
  }
  get nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    return null;
  }
  state = {
    currentStep: 1,
    // MANDATORY
    title: "",
    content: "",
    location: "",
    dateTime: "",
    category: "",
    // OPTIONAL
    address: "",
    minPlayers: "",
    maxPlayers: "",
    noTeams: "",
    maxLength: "",
    minAge: "",
    equipment: "",
    // OTHER
    players: [],
    isCoop: "",
    numOfMatches: "",
    gameDates: "",
    region: "",
    referralLinks: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h4 className="bold">Create League</h4>
          <MandatoryFields
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            handleSelectCategory={this.handleSelectCategory}
            handleDateChange={this.handleDateChange}
            title={this.state.title}
            content={this.state.content}
            location={this.state.location}
            dateTime={this.state.dateTime}
            category={this.state.category}
          />
          <OptionalFields
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            address={this.state.address}
            minPlayers={this.state.minPlayers}
            maxPlayers={this.state.maxPlayers}
            noTeams={this.state.noTeams}
            maxLength={this.state.maxLength}
            minAge={this.state.minAge}
            equipment={this.state.equipment}
          />
          <LeagueFields currentStep={this.state.currentStep} />
          <SubmitGame currentStep={this.state.currentStep} />
          {this.previousButton}
          {this.nextButton}
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
