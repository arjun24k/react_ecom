const { default: SHOP_DATA } = require("./shop.data");

const INTITAL_STATE={
    collections:SHOP_DATA
}

export const shopReducer = (state=INTITAL_STATE,action) =>{
    switch (action.type) {
        default:
            return state;
    }
}