import {
    CONFIRMATION_ADD_REPLACEMENT,
    CONFIRMATION_CONFIRM,
    CONFIRMATION_CLEAR_CONFIRMS,
    CONFIRMATION_CLEAR_REPLACEMENTS
} from "./reduxConstants";

function confirmationReducer(state ={confirmed: [], replacements: []}, action){

    const payload = action.payload;

    switch(action.type) {
        case CONFIRMATION_CONFIRM:
            return [
                ...state.confirmed,
                {payload}
            ];
        case CONFIRMATION_CLEAR_CONFIRMS:
            return {
                confirmed: []
            };
        case CONFIRMATION_ADD_REPLACEMENT:
            return [
                ...state.replacements,
                {payload}
            ];
        case CONFIRMATION_CLEAR_REPLACEMENTS:
            return {
                replacements: []
            };
        default:
            return state;
    }
}

export {confirmationReducer}
