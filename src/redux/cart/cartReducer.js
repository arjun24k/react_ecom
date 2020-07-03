import { addItemToCart, removeItemFromCart,decrementItemQuantity } from "./cart.utils";

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
        case 'ADD_ITEM_OR_INCREMENT':
            return {
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)//[...state.cartItems,action.payload]
            }
        case 'CLEAR_ITEM_FROM_CART':
            return {
                ...state,
                cartItems:removeItemFromCart(state.cartItems,action.payload)
            }
        case 'DECREMENT_ITEM_QUANTITY':
            return {
                ...state,
                cartItems:decrementItemQuantity(state.cartItems,action.payload)
            }
        case 'CLEAR_CART':
            return {
                ...state,
                cartItems:[]
            }
        default:
            return state;
    }
}

export default cartReducer;