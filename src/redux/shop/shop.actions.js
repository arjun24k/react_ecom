import { firestore } from "firebase"
import { loadData } from "../../firebase/firebase.util"

export const fetchCollectionsStart=() =>{
    return {
        type:'FETCH_COLLECTIONS_START'
    }
}

export const fetchCollectionsFaliure = (error) =>{
    return {
        type:'FETCH_COLLECTIONS_FALIURE',
        payload:error
    }
}

export const fetchCollectionsSuccess = (collectionsData) =>{
    return {
        type:'FETCH_COLLECTIONS_SUCCESS',
        payload:collectionsData
    }
}

export const fetchCollectionsStartAsync=() =>{
    console.log('aaaaaaaaaaaaaaaaaa')
    return dispatch =>{
        console.log('aaaaaaaaaaaaaaaaaa')
        console.log(dispatch);
        dispatch(fetchCollectionsStart());
        firestore().collection('collections').get().then(
            snapshot =>{
            const collectionsMap = loadData(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
           }
       ).catch(
           error =>
           dispatch(fetchCollectionsFaliure(error))
       );
    }
}



