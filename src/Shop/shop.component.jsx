import React from 'react';
import { Route } from 'react-router-dom';
import { fetchCollectionsStart} from '../redux/shop/shop.actions.js';
import { connect } from 'react-redux';
import CollectionsOverviewContainer from '../CollectionOverview/collectionOverview.container.jsx';
import CategoryPageContainer from '../Category/category.container.jsx';
import { useEffect } from 'react';
/* 
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);
 */
const ShopPage = ({match,fetchCollectionsStart}) =>{

    useEffect(
        ()=>{
            fetchCollectionsStart()
        },
        [fetchCollectionsStart]
    )
    
    

  /* 
    componentDidMount(){
        console.log('a');
    const {fetchCollectionsStart} = this.props;
      fetchCollectionsStart();
        
    } */
    
    
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>{//(props) =><CategoryPageWithSpinner isLoading={!this.props.isCollectionsLoaded} {...props}/>//(props) =><CollectionOverviewWithSpinner isLoading={this.props.isLoading} {...props}/>}
                <Route path={`${match.path}/:categoryId`} component={CategoryPageContainer}/>/* identifiers aree available as props in the child componenet.Based on this u can set respective options in child.Here we got to the respective category based on categoryId */}
            </div>
        );
    
}

const mapDispatchToProps = (dispatch) =>{
    return {
        fetchCollectionsStart:()=>dispatch(fetchCollectionsStart())
    }
}

/* const mapStateToProps = state =>{
    return {
        isLoading:selectIsLoading(state),
        isCollectionsLoaded:selectIsCollectionsLoaded(state)
    }
} 
 */

export default connect(null,mapDispatchToProps)(ShopPage)