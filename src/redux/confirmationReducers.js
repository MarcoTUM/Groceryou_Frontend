import {
    CONFIRMATION_INIT,
    CONFIRMATION_CONFIRM
} from "./reduxConstants";
import {confirm_state} from "../shared/confirmStates";
import store from "../store";

function confirmationReducer(state ={items: []}, action){

    const payload = action.payload;

    switch(action.type) {
        case CONFIRMATION_INIT:
            return {
                items: payload
            };
        case CONFIRMATION_CONFIRM:
            let new_items = store.getState().items;
            new_items[payload].state = confirm_state.confirm;

            return {
                items: new_items
            };
        default:
            return state;
    }
}

export {confirmationReducer}
