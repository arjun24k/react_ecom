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