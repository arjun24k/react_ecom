export const addItemToCart = (cartItems,newCartItem)=>{
    const itemExists = cartItems.find(
        cartItem =>cartItem.id===newCartItem.id
    );
    if(itemExists){
        return cartItems.map(
            cartItem =>(
                cartItem.id===newCartItem.id
                ?{...cartItem,quantity:cartItem.quantity+1}
                :cartItem
        )
        )
    }
    return [...cartItems,{...newCartItem,quantity:1}];
}

export const removeItemFromCart = (cartItems,cartItemToRemove) =>{
    return cartItems.filter(cartItem=>cartItem.id!==cartItemToRemove.id);
}

export const decrementItemQuantity = (cartItems,itemToDecrement) =>{
   
    if(itemToDecrement.quantity<=1){
    return cartItems.filter(cartItem=>cartItem.id!==itemToDecrement.id);
    }
    return cartItems.map(
        cartItem => (
            cartItem.id === itemToDecrement.id
            ?{...cartItem,quantity:itemToDecrement.quantity-1}
            :cartItem
        )
    )
}