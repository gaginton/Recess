import firebase from "firebase/app";

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

    firebase
      .firestore()
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
      .then(res => {
        res.set({ id: res.id }, { merge: true });
        dispatch({ type: "CREATE_GAME", game });
      })
      .catch(err => {
        dispatch({ type: "CREATE_GAME_ERROR", err });
      });
  };
};

export const joinGame = game => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const currentUser = firebase.auth().currentUser;
    const gameId = window.location.pathname.split("/")[
      window.location.pathname.split("/").length - 1
    ];

    // if (currentUser == null) {
    //   return;
    // }

    const gamePlayerDoc = await firebase
      .firestore()
      .doc(`/games/${gameId}/players/${currentUser.uid}`)
      .get();

    if (gamePlayerDoc.exists) {
      return;
    }

    firebase
      .firestore()
      .collection("games")
      .doc(gameId)
      .collection("players")
      .doc(currentUser.uid)
      .set({
        name: `${profile.firstName} ${profile.lastName}`
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
    const currentUser = firebase.auth().currentUser;
    // const profile = getState().firebase.profile;
    const gameId = window.location.pathname.split("/")[
      window.location.pathname.split("/").length - 1
    ];

    // const playersMinus = game.players.filter(
    //   user => user.id !== currentUser.uid
    // );
    // game.players = playersMinus;

    firebase
      .firestore()
      .collection("games")
      .doc(gameId)
      .collection("players")
      .doc(currentUser.uid)
      .delete()
      .then(() => {
        dispatch({ type: "LEFT_GAME", game });
      })
      .catch(err => {
        dispatch({ type: "LEFT_GAME_ERROR", err });
      });
  };
};
