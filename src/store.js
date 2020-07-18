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
import {placedRequestsReducer} from './redux/placedRequestsReducers';

//localStorage.clear();

const savedCurrentStorage = JSON.parse(localStorage.getItem('currentShop'));
const savedCart = JSON.parse(localStorage.getItem('cart'));



const initialState = {
    //getting token from local storage
    auth: {
        token: localStorage.getItem('jwtToken'),
        username: localStorage.getItem('username')
    },

    //get currentShop from local storage
    currentShop: savedCurrentStorage!==null?savedCurrentStorage:{loading: false, data: null, errMess: null},

    //get currentShop from local storage
    cart: savedCart!==null?savedCart:{price: 0, cartItems: []}

};
const reducer = combineReducers({
    auth: authReducer,
    shops: shopsOnMapReducer,
    currentShop: currentShopReducer,
    cart: cartReducer,
    currentRequest: currentRequestReducer,
    acceptedRequests: acceptedRequestReducer,
    customersList: customerReducer,
    confirmation: confirmationReducer,
    placedRequests: placedRequestsReducer
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


store.subscribe(() => {
    //subscribe to login state
    localStorage.setItem('jwtToken', store.getState().auth.token);
    //subscribe to login name
    localStorage.setItem('username', store.getState().auth.username);
    //subscribe to current shop (object)
    localStorage.setItem('currentShop', JSON.stringify(store.getState().currentShop));
    //subscribe to current shopping cart <--- this will be set to empty user enters a new shop!
    localStorage.setItem('cart', JSON.stringify(store.getState().cart));
});

export default store;
