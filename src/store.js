import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { shopsOnMapReducer } from './redux/shopsOnMapReducers';
import { cartReducer } from './redux/cartReducers';
import { authReducer } from "./redux/authReducers";
import { currentRequestReducer } from "./redux/currentRequestReducers";
import { acceptedRequestReducer } from "./redux/acceptedRequestReducers";
import { currentShopReducer } from './redux/currentShopReducers';
import { customerReducer } from "./redux/customerReducers";
import {confirmationReducer} from "./redux/confirmationReducers";

const initialState = {
    //getting token from local storage
    auth: {
        token: localStorage.getItem('jwtToken'),
        username: localStorage.getItem('username')
    }
};
const reducer = combineReducers({
    auth: authReducer,
    shops: shopsOnMapReducer,
    currentShop: currentShopReducer,
    cart: cartReducer,
    currentRequest: currentRequestReducer,
    acceptedRequests: acceptedRequestReducer,
    customersList: customerReducer,
    confirmation: confirmationReducer
});

// ----------------- Firefox Redux Dev tools ------------------------------------
const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);
// ------------------------------------------------------------------------------

const store = createStore(reducer, initialState, enhancer);

//subscribe to login state
store.subscribe(() => {
    localStorage.setItem('jwtToken', store.getState().auth.token);
});

//subscribe to login name
store.subscribe(() => {
    localStorage.setItem('username', store.getState().auth.username);
});

export default store;
