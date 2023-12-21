// reducers.js

import {GET_PRODUCTS} from "../type";

const initialState = {
    products: [],
};

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
};
