import React from 'react'
import './checkout.styles.scss'
import { connect } from 'react-redux';
import CheckoutItem from '../Checkout_Item/checkoutItem';
import { selectCartItems, selectTotalPrice } from '../../redux/cart/cart.selectors';

const Checkout = ({cartItems,total}) =>{
    return(
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Products</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
                {
                    cartItems.map(
                        cartItem => {
                            return <CheckoutItem key={cartItem.id} cartItem={cartItem} total={total}/>
                        }
                    )
                }
           
            <div className='total'>
                <span>TOTAL:{total}</span>
            </div>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return{
        cartItems:selectCartItems(state),
        total:selectTotalPrice(state)
    }
}
export default connect(mapStateToProps)(Checkout);