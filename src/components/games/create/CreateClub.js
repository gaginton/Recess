import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createClub } from "../../../store/actions/clubActions";
import ClubFields from "./ClubFields";
import SubmitClub from "./SubmitClub";
import { isClubValid } from "../../../utils/utils";

export class CreateClub extends Component {
    constructor(props) {
        super(props);
        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
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
        if (currentStep < 2) {
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
        title: "",
        description: "",
        minAge: "",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    async handleSubmit(e) {
        e.preventDefault();
        if (isClubValid(this.state)) {
            this.props.createClub(this.state);
            this.props.history.push("/");
            // FIX VALIDATION TO INCLUDE MORE ERROR MESSAGES
        } else return (this.clubError = "Mandatory fields are missing!");
    }

    render() {
        const { auth } = this.props;
        const clubError = null;
        if (!auth.uid) return <Redirect to="/signin" />;
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <ClubFields
                        isVisible={this.state.currentStep === 1}
                        handleChange={this.handleChange}
                        title={this.state.title}
                        description={this.state.description}
                        minAge={this.state.minAge}
                    />
                    <SubmitClub
                        isVisible={this.state.currentStep === 2}
                        handleSubmit={this.handleSubmit}
                    />
                    <div className="red-text center">
                        {{ clubError } ? <p>{clubError}</p> : null}
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
        createClub: (club) => dispatch(createClub(club))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateClub);
