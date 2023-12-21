import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {productsReducer} from "./Reducers/ProductReducer";
import {userReducer} from "./Reducers/UserReducer";

export const store = createStore(
    combineReducers({
        products: productsReducer,
        user: userReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
);