import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { productListReducer } from './redux/productReducers';
import { cartReducer } from './redux/cartReducers';
import {authReducer} from "./redux/authReducers";

const initialState={
    //getting token from local storage
    auth: {
        token: localStorage.getItem('jwtToken'),
        username: localStorage.getItem('username')
    }
};
const reducer = combineReducers({
    auth: authReducer,
    productList: productListReducer,
    cart: cartReducer
});

const composeEnhancer = window.__REDUX_DEVTOLLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

//subscribe to login state
store.subscribe(() => {
    localStorage.setItem('jwtToken', store.getState().auth.token);
});

//subscribe to login name
store.subscribe( () => {
    localStorage.setItem('username', store.getState().auth.username);
});

export default store;
