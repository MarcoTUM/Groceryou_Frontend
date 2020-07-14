import {
    CONFIRMATION_INIT,
    CONFIRMATION_CONFIRM, CONFIRMATION_REPLACE, ITEMS_REQUEST_STARTED, ITEMS_REQUEST_SUCCESS, ITEMS_REQUEST_FAIL
} from "./reduxConstants";
import {confirm_state} from "../shared/confirmStates";

function confirmationReducer(state ={items: []}, action){

    const payload = action.payload;
    let state_items;
    let new_items;
    let new_item;
    let source;

    switch(action.type) {

        case ITEMS_REQUEST_STARTED:
            return{
                ...state
            };
        case ITEMS_REQUEST_SUCCESS:
            state_items = payload.itemList.map((item) => {
                return{
                    content: item,
                    state: confirm_state.init
                }
            });
            return{
                ...state,
                loading: false,
                items: state_items,
                replacements: {}
            };
        case ITEMS_REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.errorMessage
            };
        case CONFIRMATION_INIT:
            let key = 0;
            state_items = payload.map((item) => {
                return{
                    key: key++,
                    content: item,
                    state: confirm_state.init
                }
            });
            return {
                items: state_items,
                replacements: []
            };
        case CONFIRMATION_CONFIRM:

            new_items = state.items.slice();
            new_item = Object.assign({}, state.items[payload], {state: confirm_state.confirm});
            new_items[payload] = new_item;

            source = {items: new_items};

            return Object.assign({}, state, source);

        case CONFIRMATION_REPLACE:

            new_items = state.items.slice();
            new_item = Object.assign({}, state.items[payload], {state: confirm_state.replace});
            new_items[payload] = new_item;

            source = {items: new_items};

            return Object.assign({}, state, source);

        default:
            return state;
    }
}

export {confirmationReducer}
