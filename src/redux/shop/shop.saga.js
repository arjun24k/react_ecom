import {takeLatest,call,put,all} from 'redux-saga/effects'
import { firestore } from 'firebase';
import { loadData } from '../../firebase/firebase.util';
import { fetchCollectionsFaliure, fetchCollectionsSuccess } from './shop.actions';

export function* fetchCollectionAsync(){
   try{
    const snapshot = yield firestore().collection('collections').get();
    const collectionsMap = yield call(loadData,snapshot);//yield helps concurrent running for async tasks//call so that u can use yield
    yield put(fetchCollectionsSuccess(collectionsMap))
   }catch(error){
    yield put(fetchCollectionsFaliure(error));
   } 
}

export function* fetchCollectionStart(){
    yield takeLatest(
        'FETCH_COLLECTIONS_START',
        fetchCollectionAsync
    );
}

export function* shopSagas(){
    yield all(
        [
            call(fetchCollectionStart)
        ]
    )
}