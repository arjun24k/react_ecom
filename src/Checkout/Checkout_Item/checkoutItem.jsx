import React from 'react'
import './checkoutItem.styles.scss'
import { connect } from 'react-redux';
import { removeItem,decrementQuantity, addItem } from '../../redux/cart/cartActions';

const CheckoutItem = ({cartItem,clearItem,decrementQuantity,incrementQuantity}) =>{
    const {name,imageUrl,price,quantity}=cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={()=>decrementQuantity(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={()=>incrementQuantity(cartItem)}>&#10095;</div>
                </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={()=>clearItem(cartItem)}>&#10005;</div>
        </div>
    );
}

const mapDispatchToProps = dispatch =>{
    return {
        clearItem:(item)=>dispatch(removeItem(item)),
        decrementQuantity:(item)=>dispatch(decrementQuantity(item)),
        incrementQuantity:(item)=>dispatch(addItem(item))
    }
}

export default connect(null,mapDispatchToProps)(CheckoutItem);