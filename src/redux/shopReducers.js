import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from './reduxConstants';

function shopReducer(state = {loading: true, shops: [], errMess: null}, action){
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {...state, loading: true, shops: [], errMess: null};
        case PRODUCT_LIST_SUCCESS:
            return {...state, loading: false, shops: action.payload.shops, errMess: null}
        case PRODUCT_LIST_FAIL:
            return {...state, loading: false, shops: [], errMess: action.payload};
        default:
            return state;
    }
}

export {shopReducer}