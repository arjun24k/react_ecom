export const toggleCartHidden = () =>{
    return {
        type:'TOGGLE_CART_HIDDEN'
    }
}

export const addItem = (item) =>{
    return {
        type:'ADD_ITEM_OR_INCREMENT',
        payload:item
    }
}

export const removeItem = (item) =>{
    return {
        type:'CLEAR_ITEM_FROM_CART',
        payload:item
    }
}

export const decrementQuantity = (item) =>{
    return {
        type:'DECREMENT_ITEM_QUANTITY',
        payload:item
    }
}

export const clearCart = () =>{
    return {
        type:'CLEAR_CART'
    }
}