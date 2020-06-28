import React from 'react';
import './collectionOverview.styles.scss';
import { connect } from 'react-redux';
import CollectionPreview from '../PreviewCollection/collectionPreview';
import {  selectCollectionsForPreview } from '../redux/shop/shopSelector';

const CollectionsOverview = ({collections}) =>{
    return(
        <div className='collections-overview'>
            {
                collections.map(({id, ...otherCollectionProps}) =>{
                    return <CollectionPreview key={id} {...otherCollectionProps}/>
                })
            }
        </div>
    );
}


const mapStateToProps = (state) =>{
    return {
        collections:selectCollectionsForPreview(state)
    }
}

export default connect(mapStateToProps)(CollectionsOverview);