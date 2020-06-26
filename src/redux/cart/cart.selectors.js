import {createSelector} from 'reselect'

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems)=>cartItems.reduce(
        (accumulator,cartItem)=>accumulator+cartItem.quantity,0
    )
);

export const selectToggleHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectTotalPrice = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumulator,cartItem) =>{
            return accumulator += cartItem.price * cartItem.quantity
        },0
    )
)