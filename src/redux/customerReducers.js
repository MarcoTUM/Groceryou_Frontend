import {
    CUSTOMER_REQUEST_STARTED,
    CUSTOMER_REQUEST_SUCCESS,
    CUSTOMER_REQUEST_FAIL
} from "./reduxConstants"

const initialState = {
    loading: true,
    customersListData: {},
    error: null
}

function customerReducer(state = initialState, action) {

    const payload = action.payload;
    
    switch (action.type) {
        case CUSTOMER_REQUEST_STARTED:
            return {
                ...state
            };
        case CUSTOMER_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                customersListData: {...payload}
            };
        case CUSTOMER_REQUEST_FAIL:
            return { 
                ...state,
                loading: false,
                error: action.payload.errorMessage 
            };
        default:
            return state;
    }
}

export { customerReducer}