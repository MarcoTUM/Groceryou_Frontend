import {
    ACCEPTED_REQUEST_SUCCESS,
    ACCEPTED_REQUEST_FAIL
} from "./reduxConstants"

function acceptedRequestReducer(state = {}, action) {

    const payload = action.payload;

    switch (action.type) {
        case ACCEPTED_REQUEST_SUCCESS:
            return {...state, ...payload};
        case ACCEPTED_REQUEST_FAIL:
            return { error: action.payload };
        default:
            return state;
    }
}

export { acceptedRequestReducer}