const INTITAL_STATE = {
    currentUser:null,
    error:null
}
const userReducer = (state=INTITAL_STATE,action) => {
    console.log(action.type)
    switch (action.type){
    case 'SIGN_IN_SUCCESS':
        return {
            ...state,
            currentUser:action.payload,
            error:null
        }
    case 'SIGN_OUT_SUCCESS':
        return {
            ...state,
            currentUser:null
        }
    case 'SIGN_IN_FALIURE':
    case 'SIGN_OUT_FALIURE':
        return {
            ...state,
            error:action.payload
        }
    default:
        return state;
}
}

export default userReducer;

    /* case 'SET_CURRENT_USER':
        return {
            ...state,
            currentUser:action.payload
        } */