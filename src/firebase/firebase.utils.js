import firebase from'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCJV5BB3TJthpBI1ME4IaVSTw3uJuL45GQ",
    authDomain: "crwn-db-e5c12.firebaseapp.com",
    projectId: "crwn-db-e5c12",
    storageBucket: "crwn-db-e5c12.appspot.com",
    messagingSenderId: "1097049015018",
    appId: "1:1097049015018:web:bf4e4383446fe1b3fccd93",
    measurementId: "G-KQ98KM7WSQ"
 }

 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({ prompt: 'select_account' });
 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;