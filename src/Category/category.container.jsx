import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectIsCollectionsLoaded } from '../redux/shop/shopSelector';
import WithSpinner from '../WithSpinner/withSpinner';
import CategoryPage from './category';

const mapStateToProps = (state) =>{
    return {
        isLoading:!selectIsCollectionsLoaded(state)
    }
}

const CategoryPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CategoryPage);

export default CategoryPageContainer;