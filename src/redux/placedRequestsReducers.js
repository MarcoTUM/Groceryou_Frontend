import {
    PLACED_REQUESTS_STARTED,
    PLACED_REQUESTS_SUCCESS,
    PLACED_REQUESTS_FAIL
} from "./reduxConstants"

const initialState = {
    loading: true,
    data: [],
    error: null
}

function placedRequestsReducer(state = initialState, action) {

    switch (action.type) {
        case PLACED_REQUESTS_STARTED:
            return {
                ...state,
                loading: true,
                data: [],
                error:null
            };
        case PLACED_REQUESTS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            };
        case PLACED_REQUESTS_FAIL:
            return { 
                ...state,
                loading: false,
                data: [],
                error: action.payload 
            };
        default:
            return state;
    }
}

export { placedRequestsReducer}