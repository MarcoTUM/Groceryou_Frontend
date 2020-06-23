import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { productListReducer } from './redux/productReducers';
import { cartReducer } from './redux/cartReducers';

const initialState={
    //getting token from local storage
    token: localStorage.getItem('jwtToken')
};
const reducer = combineReducers({
    productList: productListReducer,
    cart: cartReducer
});

const composeEnhancer = window.__REDUX_DEVTOLLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

//subscribe to login state
store.subscribe(() => {
    localStorage.setItem('jwtToken', store.getState().token);
});

export default store;
