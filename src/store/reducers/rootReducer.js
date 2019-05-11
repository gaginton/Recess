import authReducer from "./authReducer";
import gameReducer from "./gameReducer";
import chatReducer from "./chatReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  game: gameReducer,
  message: chatReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
