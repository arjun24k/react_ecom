import React from 'react';
import CollectionOverview from '../CollectionOverview/collectionOverview.jsx';
import { Route } from 'react-router-dom';
import CategoryPage from '../Category/category.jsx';

const ShopPage = ({match}) =>{
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route path={`${match.path}/:categoryId`} component={CategoryPage}/>{/* identifiers aree available as props in the child componenet.Based on this u can set respective options in child.Here we got to the respective category based on categoryId */}
        </div>
    );
}

export default ShopPage;