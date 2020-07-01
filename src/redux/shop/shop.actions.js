export const setShopData=shopData =>{
    return {
        type:'SET_SHOP_DATA',
        payload:shopData
    }
}

export const setIsLoading = (value) =>{
    return {
        type:'SET_IS_LOADING',
        payload:value
    }
}