import { selectIsCollectionsLoaded } from '../redux/shop/shopSelector';
import CollectionsOverview from './collectionOverview';
import WithSpinner from '../WithSpinner/withSpinner';
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapStateToProps = (state) =>{
    return {
        isLoading:!selectIsCollectionsLoaded(state)
    }
}

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;