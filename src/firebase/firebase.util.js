import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'

const config={
    apiKey: "AIzaSyDtsNcdGd4pXOU5lqnaIa4YYlbi3kMtqMo",
    authDomain: "testzones-92f2d.firebaseapp.com",
    databaseURL: "https://testzones-92f2d.firebaseio.com",
    projectId: "testzones-92f2d",
    storageBucket: "testzones-92f2d.appspot.com",
    messagingSenderId: "101830087272",
    appId: "1:101830087272:web:cbc216c40e2d9e0a8461dd"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;