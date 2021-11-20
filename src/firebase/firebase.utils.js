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

 export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set( {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message)
        }
    }
    
    return userRef;
 }

 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({ prompt: 'select_account' });
 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase; 