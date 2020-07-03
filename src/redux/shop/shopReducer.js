//const { default: SHOP_DATA } = require("./shop.data");

const INTITAL_STATE={
    collections:null,
    isLoading:false,
    errorMsg:undefined
}

export const shopReducer = (state=INTITAL_STATE,action) =>{
    
    switch (action.type) {
        case 'FETCH_COLLECTIONS_START':{
            return {
                ...state,
                isLoading:true
            }
        }
        case 'FETCH_COLLECTIONS_SUCCESS':{
            return {
                ...state,
                isLoading:false,
                collections:action.payload
            }
        }
        case 'FETCH_COLLECTIONS_FALIURE':{
            return {
                ...state,
                isLoading:false,
                errorMsg:action.payload
            }
        }
        default:
            return state;
    }
}