import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDwYcwvbMrmw1QLwjdjku0PMzUxECiCHQ0",
  authDomain: "recess-8a9b6.firebaseapp.com",
  databaseURL: "https://recess-8a9b6.firebaseio.com",
  projectId: "recess-8a9b6",
  storageBucket: "recess-8a9b6.appspot.com",
  messagingSenderId: "636940712309"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

// const database = firebase.database();

export default firebase;
