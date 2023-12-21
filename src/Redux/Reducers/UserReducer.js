// reducers.js

import {GET_USER} from "../type";

const initialState = {
    user: {},
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
};
