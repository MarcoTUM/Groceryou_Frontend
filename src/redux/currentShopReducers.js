import { SHOP_SELECTION_SUCCESS, SHOP_SELECTION_FAIL} from './reduxConstants';

function currentShopReducer(state = {loading: false, data: null, errMess: null}, action){
    switch (action.type) {
        case SHOP_SELECTION_SUCCESS:
            return {...state, loading: false, data: action.payload, errMess: null}
        case SHOP_SELECTION_FAIL:
            return {...state, loading: false, data: null, errMess: action.payload};
        default:
            return state;
    }
}

export {currentShopReducer}