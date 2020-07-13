import {
    CONFIRMATION_INIT
} from "./reduxConstants";

function confirmationReducer(state ={items: []}, action){

    const payload = action.payload;

    switch(action.type) {
        case CONFIRMATION_INIT:
            return {
                items: payload
            };
        default:
            return state;
    }
}

export {confirmationReducer}
