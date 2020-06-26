import { addItemToCart } from "./cart.utils";

const INTITIAL_STATE={
    hidden:null,
    cartItems:[]
}

const cartReducer = (state=INTITIAL_STATE,action)=>{
    switch(action.type){
        case 'TOGGLE_CART_HIDDEN':
            return {
                ...state,
                hidden:!state.hidden
            }
        case 'ADD_ITEM':
            return {
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)//[...state.cartItems,action.payload]
            }
        default:
            return state;
    }
}

export default cartReducer;