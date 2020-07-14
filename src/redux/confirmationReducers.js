import {
    CONFIRMATION_INIT,
    CONFIRMATION_CONFIRM,
    CONFIRMATION_REPLACE,
    ITEMS_REQUEST_STARTED,
    ITEMS_REQUEST_SUCCESS,
    ITEMS_REQUEST_FAIL,
    CONFIRMATION_MISSING
} from "./reduxConstants";
import {confirm_state} from "../shared/confirmStates";

//helper function spares boilerplate
const setArrayItemState = (state, index, value) => {

    let new_items = state.items.slice();
    const new_item = Object.assign({}, state.items[index], {state: value});
    new_items[index] = new_item;

    const source = {items: new_items};

    return Object.assign({}, state, source);
};

function confirmationReducer(state ={items: []}, action){

    const payload = action.payload;
    let state_items;

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

            return setArrayItemState(state, payload, confirm_state.confirm);

        case CONFIRMATION_REPLACE:

            return setArrayItemState(state, payload, confirm_state.replace);

        case CONFIRMATION_MISSING:

            return setArrayItemState(state, payload, confirm_state.missing);

        default:
            return state;
    }
}

export {confirmationReducer}
