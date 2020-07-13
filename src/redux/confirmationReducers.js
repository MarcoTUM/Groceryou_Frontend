import {
    CONFIRMATION_INIT,
    CONFIRMATION_CONFIRM, CONFIRMATION_REPLACE
} from "./reduxConstants";
import {confirm_state} from "../shared/confirmStates";
import store from "../store";

function confirmationReducer(state ={items: []}, action){

    const payload = action.payload;
    let new_items;

    switch(action.type) {
        case CONFIRMATION_INIT:
            return {
                items: payload
            };
        case CONFIRMATION_CONFIRM:
            new_items = payload.items;
            new_items[payload.index].state = confirm_state.confirm;
            return {
                items: new_items
            };
        case CONFIRMATION_REPLACE:
            new_items = payload.items;
            new_items[payload.index].state = confirm_state.replace;
            return{
                items: new_items
            };
        default:
            return state;
    }
}

export {confirmationReducer}
