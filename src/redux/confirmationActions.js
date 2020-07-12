import {
    CONFIRMATION_CONFIRM,
    CONFIRMATION_CLEAR_CONFIRMS,
    CONFIRMATION_ADD_REPLACEMENT,
    CONFIRMATION_CLEAR_REPLACEMENTS
} from "./reduxConstants";

const confirm = (item) => (dispatch) => {
    try{
        dispatch({
            type: CONFIRMATION_CONFIRM,
            payload: item
        })
    } catch (e) {}
};

const clear_confirms = () => (dispatch) => {
    try{
        dispatch({
            type: CONFIRMATION_CLEAR_CONFIRMS,
            payload: null
        })
    } catch(e){}
};

const add_replacement = (item) => (dispatch) => {
    try{
        dispatch({
            type: CONFIRMATION_ADD_REPLACEMENT,
            payload: item
        })
    } catch(e) {}
};

const clear_replacement = () => (dispatch) => {
    try{
        dispatch({
            type: CONFIRMATION_CLEAR_REPLACEMENTS,
            payload: null
        })
    } catch(e) {}
};

export {confirm,clear_confirms,add_replacement, clear_replacement}
