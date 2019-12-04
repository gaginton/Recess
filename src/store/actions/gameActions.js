export const createGame = game => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // MAKE ASYNC CALL TO DATABASE
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorID = getState().firebase.auth;
    let players = [`${profile.firstName} ${profile.lastName}`];
    while (players.length < game.maxPlayers) {
      players.push("");
    }
    // console.log({
    //   ...game,
    //   category: game.category.value,
    //   authorFirstName: profile.firstName,
    //   authorLastName: profile.lastName,
    //   authorId: authorID,
    //   createdAt: new Date(),
    //   players
    // });

    firestore
      .collection("games")
      .add({
        ...game,
        category: game.category.value,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorID,
        createdAt: new Date(),
        players
      })
      .then(() => {
        dispatch({ type: "CREATE_GAME", game });
      })
      .catch(err => {
        dispatch({ type: "CREATE_GAME_ERROR", err });
      });
  };
};

export const joinGame = game => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const newPlayer = `${profile.firstName} ${profile.lastName}`;
    const playersPlus = game.players;
    // console.log("game ", game.dateTime.toDate());
    for (let i = 0; i < playersPlus.length; i++) {
      if (playersPlus[i] === newPlayer) {
        return;
      }
      if (playersPlus[i] === "") {
        playersPlus[i] = newPlayer;
        game.players = playersPlus;
        break;
      }
    }
    const gameId = window.location.pathname.split("/")[
      window.location.pathname.split("/").length - 1
    ];
    firestore
      .collection("games")
      .doc(gameId)
      .update({
        ...game
      })
      .then(() => {
        dispatch({ type: "JOINED_GAME", game });
      })
      .catch(err => {
        dispatch({ type: "JOIN_GAME_ERROR", err });
      });
  };
};

export const leaveGame = game => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const leavingPlayer = `${profile.firstName} ${profile.lastName}`;
    const playersMinus = game.players;
    for (let i = 0; i < playersMinus.length; i++) {
      if (playersMinus[i] === leavingPlayer) {
        playersMinus.splice(i, 1);
        playersMinus.push("");
        game.players = playersMinus;
        break;
      }
    }
    const gameId = window.location.pathname.split("/")[
      window.location.pathname.split("/").length - 1
    ];
    firestore
      .collection("games")
      .doc(gameId)
      .update({
        ...game
      })
      .then(() => {
        dispatch({ type: "LEFT_GAME", game });
      })
      .catch(err => {
        dispatch({ type: "LEFT_GAME_ERROR", err });
      });
  };
};
