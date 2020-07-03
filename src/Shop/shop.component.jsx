import React from 'react';
import { Route } from 'react-router-dom';
import { fetchCollectionsStart} from '../redux/shop/shop.actions.js';
import { connect } from 'react-redux';
import CollectionsOverviewContainer from '../CollectionOverview/collectionOverview.container.jsx';
import CategoryPageContainer from '../Category/category.container.jsx';
/* 
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);
 */
class ShopPage extends React.Component{

  
    componentDidMount(){
        console.log('a');
    const {fetchCollectionsStart} = this.props;
      fetchCollectionsStart();
        
    }
    
    render(){
        return (
            <div className='shop-page'>
                <Route exact path={`${this.props.match.path}`} component={CollectionsOverviewContainer}/>{//(props) =><CategoryPageWithSpinner isLoading={!this.props.isCollectionsLoaded} {...props}/>//(props) =><CollectionOverviewWithSpinner isLoading={this.props.isLoading} {...props}/>}
                <Route path={`${this.props.match.path}/:categoryId`} component={CategoryPageContainer}/>/* identifiers aree available as props in the child componenet.Based on this u can set respective options in child.Here we got to the respective category based on categoryId */}
            </div>
        );
    }
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