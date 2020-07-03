import React from 'react'

import './category.styles.scss'
import { connect } from 'react-redux';
import CollectionItem from '../CollectionItem/collectionItem';
import { selectCategory } from '../redux/shop/shopSelector';
import { useEffect } from 'react';
import { firestore } from 'firebase';

const CategoryPage = ({collection}) =>{
    const {title,item} = collection;

    useEffect(
        ()=>{
           
           const unsubscribe= firestore().collection('collections').onSnapshot(Snapshot => console.log(Snapshot));
           return () =>{
          //replicates componentwillunmount
               unsubscribe();
           }
        },[]//empty array signifies componentwillmount
    )//pass arguments to list to trigger exactly at that event 



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