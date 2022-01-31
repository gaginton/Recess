import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import firebase from "firebase/compat/app";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
import { joinGame } from "../../../store/actions/gameActions";
import { leaveGame } from "../../../store/actions/gameActions";
import GameDescription from "./GameDescription";
import TeamCards from "./teams/TeamCards";
import GameFooter from "./GameFooter";
import JoinLeaveButton from "./JoinLeaveButton";

const GameDetails = (props) => {
    const { game, auth } = props;
    const [gamePlayers, setGamePlayers] = useState([]);

    useEffect(() => {
        if (!game) {
            return;
        }
        return firebase
            .firestore()
            .collection(`/games/${game.id}/players`)
            .onSnapshot((res) => {
                setGamePlayers(res.docs.map((doc) => doc.data()));
            });
    }, [game]);

    function handleTeamsChange(newTeams) {
        console.log(newTeams);
    };

    // handleTeamsChange();

    if (!auth.uid) return <Redirect to="/signin" />;
    if (game) {
        const createdAt = moment(game.createdAt.toDate()).calendar();


        // SHOULD CHECK IF AUTH.ID IN gamePLAYERS TO KNOW IF JOINED OR NOT
        console.log("PROPS.AUTH.UID: ", props.auth.uid);
        console.log("gamePlayers; ", gamePlayers)

        let joinedGame = gamePlayers

        // .filter(player => player.name === uid).length > 0 ? true : false;

        // console.log("joinedGame: ", joinedGame)
        // const handleJoin = (game) => {
        //     // console.log(
        //     //     "gamePlayers: ", gamePlayers, 
        //     //     "auth: ", auth, 
        //     //     "GAME123: ", game, 
        //     //     "JOIN123: ", joined
        //     // );
        //     if (joined === true) {
        //         leaveGame(game);
        //         return setJoined(!joined)
        //         // return join = false;
        //     }
        //     joinGame(game);
        //     return joined = true;
        // };


        return (
            <div className="container section">
                <div className="game-details card z-depth-0 opacity">

                    {/* HEADER ROW*/}
                    <div className="row row-full">
                        {/* GAME TITLE */}
                        <div className="col-sm-6">
                            <div className="card-title bold">{game.title}</div>
                        </div>
                        {/* GAME JOIN/LEAVE */}
                        <div className="col-sm-6">
                            <JoinLeaveButton
                                joined={joinedGame}
                                toggleJoined={() => {
                                    handleJoin(game);
                                }}
                            // toggleSelected={() => {
                            //     setSelected(!selected);
                            //   }}      
                            />
                        </div >
                    </div >

                    {/* BODY ROWS */}
                    < div className="row" >
                        <div className="col-sm12 col-md-6">
                            <GameDescription game={game} />
                        </div>


                        <div className="col-sm12 col-md-6">
                            <TeamCards
                                game={game}
                                teams={game.teams}
                                gamePlayers={gamePlayers}
                                onChange={handleTeamsChange}
                            />
                        </div>
                    </div >
                </div >
                {/* FOOTER*/}
                < GameFooter
                    authorFirstName={game.authorFirstName}
                    authorLastName={game.authorLastName}
                    createdAt={createdAt}
                />
                {/* OPTION FOR CHAT OR COMMENTS */}
            </div >
        );
    } else {
        return (
            <div className="container center">
                <p>Loading Game...</p>
            </div>
        );
    }
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
        joinGame: (game) => dispatch(joinGame(game)),
        leaveGame: (game) => dispatch(leaveGame(game))
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{ collection: "games" }])
)(GameDetails);
