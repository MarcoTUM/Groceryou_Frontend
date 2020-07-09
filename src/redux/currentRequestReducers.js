import {
    CURRENT_REQUEST_STARTED,
    CURRENT_REQUEST_SUCCESS,
    CURRENT_REQUEST_FAIL
} from "./reduxConstants"

const initialState = {
    loading: true,
    currentRequestData: {},
    error: null
}

function currentRequestReducer(state = initialState, action) {

    const payload = action.payload;

    switch (action.type) {
        case CURRENT_REQUEST_STARTED:
            return {
                ...state
            };
        case CURRENT_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                currentRequestData: {...payload}
            };
        case CURRENT_REQUEST_FAIL:
            return { 
                ...state,
                loading: false,
                error: action.payload.errorMessage 
            };
        default:
            return state;
    }
}

export { currentRequestReducer }