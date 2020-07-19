import {
    ACCEPTED_REQUEST_STARTED,
    ACCEPTED_REQUEST_SUCCESS,
    ACCEPTED_REQUEST_FAIL
} from "./reduxConstants"

const initialState = {
    loading: true,
    acceptedRequestsData: {},
    error: null
}

function acceptedRequestReducer(state = initialState, action) {

    const payload = action.payload;

    switch (action.type) {
        case ACCEPTED_REQUEST_STARTED:
            return {
                ...state
            };
        case ACCEPTED_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                acceptedRequestsData: {...payload}
            };
        case ACCEPTED_REQUEST_FAIL:
            return { 
                ...state,
                loading: false,
                error: action.payload.errorMessage 
            };
        default:
            return state;
    }
}

export { acceptedRequestReducer}