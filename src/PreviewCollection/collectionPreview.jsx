import React from "react";
import './collectionPreview.styles.scss'
import CollectionItem from "../CollectionItem/collectionItem";

const CollectionPreview = ({title,item}) =>{
    //console.log(title);console.log(items);
    return <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                item.filter((item,idx) => idx<4).map(
                   (item) =>{
                        return <CollectionItem key = {item.id} item={item}/>
                    }
                )
            }
        </div>
    </div>
}
export default CollectionPreview;