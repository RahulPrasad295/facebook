import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBbJaUGdEGsMvfXrVTGSK7_-RDQWU_YLO8",
    authDomain: "facebook-clone-a8b50.firebaseapp.com",
    databaseURL: "https://facebook-clone-a8b50.firebaseio.com",
    projectId: "facebook-clone-a8b50",
    storageBucket: "facebook-clone-a8b50.appspot.com",
    messagingSenderId: "521626454829",
    appId: "1:521626454829:web:2fbd3b36a4b51d68cee1a4",
    measurementId: "G-7QGQLBJHKH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;

