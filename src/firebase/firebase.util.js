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
}

export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if(!snapshot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
    try{
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        });
    }
    catch(error){
         console.log(error);
    }
    }
    return userRef;
}

export const addCollectionAndDocs  = async (collectionKey,objectsToAdd)  =>{
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(
        obj =>{
            const newDocRef = collectionRef.doc();
            batch.set(newDocRef,obj);
        }
    );

    return await batch.commit();
}

export const loadData = (snapshot) =>{
    const transformedCollection=snapshot.docs.map(
        doc =>{
            const {title,item} = doc.data();
            return {
                routeName : encodeURI(title.toLowerCase()),
                id:doc.id,
                title,
                item
            }
        }
    )
    return transformedCollection.reduce((accumulator,collection)=>{
        accumulator[collection.title.toLowerCase()]=collection;
        return accumulator;
    },{});
}
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;