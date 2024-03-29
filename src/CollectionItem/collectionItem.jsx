import React from 'react';
import './collectionItem.styles.scss';
import CustomButton from '../CustomButton/customButton';
import { connect } from 'react-redux';
import {addItem} from '../redux/cart/cartActions'

const CollectionItem = ({item,addItem}) => {
    const {name,price,imageUrl} = item;
    return (
    <div className='collection-item'>
        <div className='image'
        style={{
            backgroundImage:`url(${imageUrl})`
        }}
        />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={()=>addItem(item)}>
                ADD TO CART
            </CustomButton>
    </div>
);
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addItem:(item)=>dispatch(addItem(item))
    }
}
export default connect(null,mapDispatchToProps)(CollectionItem);