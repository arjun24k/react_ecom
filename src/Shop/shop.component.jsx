import React from 'react';
import CollectionOverview from '../CollectionOverview/collectionOverview.jsx';
import { Route } from 'react-router-dom';
import CategoryPage from '../Category/category.jsx';
import { firestore } from 'firebase';
import { loadData } from '../firebase/firebase.util.js';
import { setShopData ,setIsLoading} from '../redux/shop/shop.actions.js';
import WithSpinner from '../WithSpinner/withSpinner.jsx';
import { connect } from 'react-redux';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);

class ShopPage extends React.Component{

  
    unSubscribeFromSnapshot=null;
    componentDidMount(){
        console.log('ddddddddddddddddd');
        firestore().collection('collections').get().then(
             snapshot =>{
             const collectionsMap = loadData(snapshot);
             this.props.setShopData(collectionsMap);
            this.props.setIsLoading(false);
            }
        );
        
    }
    
    render(){
        return (
            <div className='shop-page'>
                <Route exact path={`${this.props.match.path}`} render={(props) =><CollectionOverviewWithSpinner isLoading={this.props.isLoading} {...props}/>}/>
                <Route path={`${this.props.match.path}/:categoryId`} render={(props) =><CategoryPageWithSpinner isLoading={this.props.isLoading} {...props}/>}/>{/* identifiers aree available as props in the child componenet.Based on this u can set respective options in child.Here we got to the respective category based on categoryId */}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        setShopData:shopData => dispatch(setShopData(shopData)),
        setIsLoading:value => dispatch(setIsLoading(value))
    }
}

const mapStateToProps = state =>{
    return {
        ...state,
        isLoading:state.shop.isLoading
    }
} 


export default connect(mapStateToProps,mapDispatchToProps)(ShopPage)