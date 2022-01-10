import React, { Component } from "react";
import { connect } from "react-redux";
import { createGame } from "../../store/actions/gameActions";
import { Redirect } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
// import GameTypes from "./GameTypes";
import OptionalFields from "./OptionalFields";
import SubmitGame from "./SubmitGame";
import MandatoryFields from "./MandatoryFields";
// import AddressField from "./AddressField"

const MAPS_API_KEY = "AIzaSyAM6_5p4WOHokKXAJ_U2bVmbBDpUqdm7-U";

export class CreateGame extends Component {
  constructor(props) {
    super(props);
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // componentDidUpdate() {
  //   console.log("component did update", this.state);
  //   // this.props.createGame(this.state);
  // }
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
    markers: "",
    minPlayers: "",
    maxPlayers: "",
    noTeams: "",
    maxLength: "",
    minAge: "",
    equipment: "",
    // OTHER
    isCoop: "",
    teams: []
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
  handleSelectCategory = option => {
    this.setState({
      category: option
    });
  };
  async handleSubmit(e) {
    e.preventDefault();
    if (
      this.state.title !== "" &&
      this.state.content !== "" &&
      this.state.location !== "" &&
      this.state.dateTime !== "" &&
      this.state.category !== ""
    ) {
      if (this.state.address !== "") {
        await this.updateLocation(this.state.address);
        // GIVE ERROR MESSAGE IF ADDRESS DOES NOT GIVE COORD
      }
      this.props.createGame(this.state);
      this.props.history.push("/");
      // FIX VALIDATION TO INCLUDE MORE ERROR MESSAGES
    } else return (this.gameError = "Mandatory fields are missing!");
  }
  async updateLocation(address) {
    await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}+123&key=${MAPS_API_KEY}`
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          markers: res.results.map(result => ({
            lat: result.geometry.location.lat,
            lng: result.geometry.location.lng
          }))
        });
      })
      .catch(console.log);
  }
  render() {
    const { auth } = this.props;
    let gameError = null;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h4 className="bold">Create Game</h4>
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
          {/* <AddressField
            handleChange={this.handleChange}
            currentStep={this.state.currentStep}
            address={this.state.address}
          /> */}
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
          <SubmitGame
            currentStep={this.state.currentStep}
            handleSubmit={this.handleSubmit}
          />
          <div className="red-text center">
            {{ gameError } ? <p>{gameError}</p> : null}
          </div>
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
    createGame: game => dispatch(createGame(game))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateGame);
