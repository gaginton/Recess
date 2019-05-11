export const createMessage = message => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // MAKE ASYNC CALL TO DATABASE
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    // const authorID = getState().firebase.auth;
    firestore
      .collection("chatroom")
      .add({
        ...message,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        // authorId: authorID,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_MESSAGE", message });
      })
      .catch(err => {
        dispatch({ type: "CREATE_MESSAGE_ERROR", err });
      });
  };
};
