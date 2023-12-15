import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {productsReducer} from "./ProductReducer/ProductReducer";

export const store = createStore(
    productsReducer,
    composeWithDevTools(applyMiddleware(thunk))
);