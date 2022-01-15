import React, { useState } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { editGame } from "../../../store/actions/gameActions";
import MandatoryFields from "../create/MandatoryFields";
import OptionalFields from "../create/OptionalFields";
import SubmitGame from "../create/SubmitGame";
import GameTypes from "../GameTypes";
import { getGoogleMapsLocation, isGameValid } from "../../../utils/utils";

const EditGame = (props) => {
    const { game, auth } = props;

    if (!auth?.uid) {
        return <Redirect to="/signin" />;
    }

    if (!game) {
        return (
            <div className="container center">
                <p>Loading Game...</p>
            </div>
        );
    }

    const [state, setState] = useState({...props.game});

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value
        });
    };

    const handleDateChange = (date) => {
        setState({
            ...state,
            dateTime: date
        });
    };

    const handleSelectCategory = (option) => {
        setState({
            ...state,
            category: option.value
        });
    };

    const updateLocation = async (address) => {
        const location = await getGoogleMapsLocation(address);
        if (location) {
            setState({
                ...state,
                markers: location.results.map((result) => ({
                    lat: result.geometry.location.lat,
                    lng: result.geometry.location.lng
                }))
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isGameValid(state)) {
            if (state.address !== "") {
                await updateLocation(state.address);
            }
            props.editGame(state);
            props.history.push("/");
        } else {
            return "Mandatory fields are missing!";
        }
    };

    let gameError = "";
    console.log(state);

    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit}>
                <MandatoryFields
                    handleChange={handleChange}
                    handleSelectCategory={handleSelectCategory}
                    handleDateChange={handleDateChange}
                    title={state.title}
                    content={state.content}
                    location={state.location}
                    dateTime={state.dateTime && new Date(state.dateTime.seconds)}
                    category={GameTypes.find((type) => type.value === state.category)}
                />
                <OptionalFields
                    handleChange={handleChange}
                    address={state.address}
                    minPlayers={state.minPlayers}
                    maxPlayers={state.maxPlayers}
                    noTeams={state.noTeams}
                    maxLength={state.maxLength}
                    minAge={state.minAge}
                    equipment={state.equipment}
                />
                <SubmitGame
                    handleSubmit={handleSubmit}
                />
                <div className="red-text center">
                    {{ gameError } ? <p>{gameError}</p> : null}
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const games = state.firestore.data.games;
    const game = games ? games[id] : null;
    return {
        game: game,
        auth: state.firebase.auth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        editGame: (game) => dispatch(editGame(game)),
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{ collection: "games" }])
)(EditGame);
