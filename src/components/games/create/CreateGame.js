import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { createGame } from "../../../store/actions/gameActions";
import OptionalFields from "./OptionalFields";
import SubmitGame from "./SubmitGame";
import MandatoryFields from "./MandatoryFields";
import { getGoogleMapsLocation, isGameValid } from "../../../utils/utils";

export class CreateGame extends Component {
    constructor(props) {
        super(props);
        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
        this.updateLocation = this.updateLocation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        const currentStep = this.state.currentStep;
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
        const currentStep = this.state.currentStep;
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

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleDateChange = (date) => {
        this.setState({
            dateTime: date
        });
    };

    handleSelectCategory = (option) => {
        this.setState({
            category: option
        });
    };

    async handleSubmit(e) {
        e.preventDefault();
        if (isGameValid(this.state)) {
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
        const location = await getGoogleMapsLocation(address);
        if (location) {
            this.setState({
                markers: location.results.map((result) => ({
                    lat: result.geometry.location.lat,
                    lng: result.geometry.location.lng
                }))
            });
        }
    }

    render() {
        const { auth } = this.props;
        const gameError = null;
        if (!auth.uid) return <Redirect to="/signin" />;
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <MandatoryFields
                        isVisible={this.state.currentStep === 1}
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
                        isVisible={this.state.currentStep === 2}
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
                        isVisible={this.state.currentStep === 3}
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

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createGame: (game) => dispatch(createGame(game))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateGame);
