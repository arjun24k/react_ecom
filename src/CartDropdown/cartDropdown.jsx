import React from 'react';
import CustomButton from '../CustomButton/customButton'
import './cartDropdown.styles.scss'
import CartItem from '../CartItem/cartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../redux/cart/cart.selectors';

const CartDropdown = ({cartItems}) =>{
    return (
        <div className='cart-dropdown'>
            
            <div className='cart-items'>
            {
                 cartItems.map(
                    cartItem =>{ 
                        console.log(cartItem);
                            return <CartItem key ={cartItem.id} cartItem={cartItem}/>
                }
                )
            }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );

}
const mapStateToProps = (state) =>{
    return {
        cartItems:selectCartItems(state)
    }
}
export default connect(mapStateToProps)(CartDropdown);