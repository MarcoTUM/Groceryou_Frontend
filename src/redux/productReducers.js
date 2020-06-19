import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from './reduxConstants';

function productListReducer(state = {loading: true, products: [], errMess: null}, action){
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {...state, loading: true};
        case PRODUCT_LIST_SUCCESS:
            console.log("very hard" + {...state, loading: false, products: action.payload.shops});
            return {...state, loading: false, products: action.payload.shops}
        case PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export {productListReducer}