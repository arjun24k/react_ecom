import React from "react";
import './collectionPreview.styles.scss'
import CollectionItem from "../CollectionItem/collectionItem";

const CollectionPreview = ({title,items}) =>{
    //console.log(title);console.log(items);
    return <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item,idx) => idx<4).map(
                   ({id,...otherItems}) =>{
                        return <CollectionItem key = {id} {...otherItems}/>
                    }
                )
            }
        </div>
    </div>
}
export default CollectionPreview;