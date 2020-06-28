import {
    CURRENT_REQUEST_SUCCESS,
    CURRENT_REQUEST_FAIL
} from "./reduxConstants"

function currentRequestReducer(state = {}, action) {

    const payload = action.payload;

    switch (action.type) {
        case CURRENT_REQUEST_SUCCESS:
            return {...state, ...payload};
        case CURRENT_REQUEST_FAIL:
            return { error: action.payload };
        default:
            return state;
    }
}

export { currentRequestReducer }