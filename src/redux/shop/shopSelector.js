import {createSelector} from 'reselect'


const selectShop = (state) => state.shop;

export const selectCollectionData = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollectionData],
    collections =>Object.keys(collections).map(key => collections[key])
);

export const selectCategory= categoryUrlParam =>createSelector(
    
        [selectCollectionData],
        collections =>
        collections[categoryUrlParam]
);

