//const { default: SHOP_DATA } = require("./shop.data");

const INTITAL_STATE={
    collections:null,
    isLoading:true
}

export const shopReducer = (state=INTITAL_STATE,action) =>{
    
    switch (action.type) {
        case 'SET_SHOP_DATA':{
            console.log(action.payload);console.log('--------------------------')
            return {
                ...state,
                collections:action.payload
            }
        }
        case 'SET_IS_LOADING':{
            console.log(!state.isLoading)
            return {
                ...state,
                isLoading:action.payload
            }
        }
        default:
            return state;
    }
}