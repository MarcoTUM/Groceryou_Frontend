import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { shopReducer } from './redux/shopReducers';
import { cartReducer } from './redux/cartReducers';

const initialState={};
const reducer = combineReducers({
    shops: shopReducer,
    cart: cartReducer
})

const composeEnhancer = window.__REDUX_DEVTOLLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));
export default store;