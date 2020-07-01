import React from 'react'

import './category.styles.scss'
import { connect } from 'react-redux';
import CollectionItem from '../CollectionItem/collectionItem';
import { selectCategory } from '../redux/shop/shopSelector';

const CategoryPage = ({collection}) =>{
    const {title,item} = collection;
    return(
        <div className='category-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                  item.map(
                      item=><CollectionItem key={item.id} item={item}/>
                  )  
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state,ownProps) =>{
    return {
        collection:selectCategory(ownProps.match.params.categoryId)(state)
    }
}
export default connect(mapStateToProps)(CategoryPage);