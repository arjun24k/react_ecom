import React from 'react'
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';
import { toggleCartHidden } from '../redux/cart/cartActions';
import { connect } from 'react-redux';
import './cartIcon.scss'
import { selectCartItemsCount } from '../redux/cart/cart.selectors';

const CartIcon = ({toggleCartHidden,itemCount}) => {
    return(
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    );
}

const mapDispatchToProps = (dispatch) =>{
   return {
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
   }
}

const mapStateToProps = (state) =>{
    return {
        itemCount : selectCartItemsCount(state)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);