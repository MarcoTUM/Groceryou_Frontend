import { SHOPS_LIST_REQUEST, SHOPS_LIST_SUCCESS, SHOPS_LIST_FAIL } from './reduxConstants';

function shopsOnMapReducer(state = {loading: true, shops: [], errMess: null}, action){
    switch (action.type) {
        case SHOPS_LIST_REQUEST:
            return {...state, loading: true, shops: [], errMess: null};
        case SHOPS_LIST_SUCCESS:
            return {...state, loading: false, shops: action.payload, errMess: null}
        case SHOPS_LIST_FAIL:
            return {...state, loading: false, shops: [], errMess: action.payload};
        default:
            return state;
    }
}

export {shopsOnMapReducer}