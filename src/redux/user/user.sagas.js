import { takeLatest,put,all,call } from "redux-saga/effects";
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import { signInFaliure,signInSuccess, signOutSuccess, signOutFaliure, signOutStart } from "./user.actions";
import { createUserProfileDocument } from "../../firebase/firebase.util";


export function* signInWithGoogle(){
    try{
        const googleProvider = yield new firebase.auth.GoogleAuthProvider();
        const {user} = yield firebase.auth().signInWithPopup(googleProvider);
        const userRef= yield call(createUserProfileDocument,user);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({
            id:userSnapshot.id,
            ...userSnapshot.data()
        }));
    }catch(error){
        yield put(signInFaliure(error));
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(
            'GOOGLE_SIGN_IN_START',
            signInWithGoogle
        )
}

export function* onEmailSignInStart(){
    yield takeLatest(
        'EMAIL_SIGN_IN_START',
        signInWithEmail
    )
}

export function* signInWithEmail({payload:{email,password}}){
   try{
    const {user}=yield firebase.auth().signInWithEmailAndPassword(email,password);
    const userRef= yield call(createUserProfileDocument,user);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({
        id:userSnapshot.id,
        ...userSnapshot.data()
    }))
   }catch(error){
    yield put(signInFaliure(error))
   }
    

}
export function* isUserAuthenticated(){
try{
    const userAuth = yield getCurrentUser();
    if(!userAuth) return;
    else{
        const userRef= yield call(createUserProfileDocument,{userAuth});
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({
        id:userSnapshot.id,
        ...userSnapshot.data()
    }))
    }   
}catch(error){
    yield put(signInFaliure(error))
}
}

export function* onCheckUserSession(){
    yield takeLatest(
        'CHECK_USER_SESSION',
        isUserAuthenticated
    )
};

const getCurrentUser = () =>{
    return new Promise((resolve,reject) =>{
        const unsubscribe = firebase.auth().onAuthStateChanged(
            userAuth =>{
                unsubscribe();
                resolve(userAuth);
            },
            reject
        )
    });
}


export function* signUp({payload:{email,password,displayName}}){
    console.log(email);
    try{
        const {user} = yield firebase.auth().createUserWithEmailAndPassword(email,password);
        const userRef= yield call(createUserProfileDocument,user,{displayName});
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({
        id:userSnapshot.id,
        ...userSnapshot.data()
        }))
    }catch(error){
        yield put(signInFaliure(error));
    }
}


export function* onSignUpStart(){
    yield takeLatest(
        'SIGN_UP_START',
        signUp
    )
}

export function* signOutUser(){
    console.log('ddddd')
try{
    yield firebase.auth().signOut();
    yield put(signOutSuccess());
}catch(error){
    yield put(signOutFaliure(error));
}
}

export function* onSignOutStart(){
    yield takeLatest(
        'SIGN_OUT_START',
        signOutUser
    )
}
export function* userSagas(){
    yield all(
        [
            call(onGoogleSignInStart),
            call(onEmailSignInStart),
            call(onCheckUserSession),
            call(onSignOutStart),
            call(onSignUpStart)
        ]
    );
}
