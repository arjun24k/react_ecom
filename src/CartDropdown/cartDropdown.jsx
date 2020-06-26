import React from 'react';
import CustomButton from '../CustomButton/customButton'
import './cartDropdown.styles.scss'
import CartItem from '../CartItem/cartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../redux/cart/cartActions';

const CartDropdown = ({cartItems,history,dispatch}) =>{
    return (
        <div className='cart-dropdown'>
            
            <div className='cart-items'>
            {
                cartItems.length?
                 cartItems.map(
                    cartItem =>{ 
                        console.log(cartItem);
                            return <CartItem key ={cartItem.id} cartItem={cartItem}/>
                }
                ):<span className='empty-message'>No items</span>
            }
            </div>
            <CustomButton onClick={()=>{
                history.push('/checkout');
               dispatch(toggleCartHidden());
            }
                }>GO TO CHECKOUT</CustomButton>
        </div>
    );

}
const mapStateToProps = (state) =>{
    return {
        cartItems:selectCartItems(state),
    }
}
//v setCurrentUser: user => dispatch(setCurrentUser(user))
/* const mapDispatchToProps = (dispatch) =>{
    return {
        toggleCartHidden:()=>dispatch(toggleCartHidden())
    };
even if this isnt passed, connect will assume dispatch prop already passed n so it can be used as props directly 
as 'dispatch'
} */
export default withRouter(connect(mapStateToProps)(CartDropdown));