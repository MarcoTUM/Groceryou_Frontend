import {
    CONFIRMATION_CONFIRM,
    CONFIRMATION_INIT, CONFIRMATION_REPLACE,
} from "./reduxConstants";

const conf_init = (items) => (dispatch) => {
    try{
        dispatch({
            type: CONFIRMATION_INIT,
            payload: items
        })
    } catch(e) {}
};

const conf_confirm = (index, items) => (dispatch) => {
    try{
        dispatch({
            type: CONFIRMATION_CONFIRM,
            payload: {
                index: index,
                items: items
            }
        })
    } catch(e) {}
};

const conf_replace = (index, items) => (dispatch) => {
    try{
        dispatch({
            type: CONFIRMATION_REPLACE,
            payload: {
                index: index,
                items: items
            }
        })
    } catch(e) {}
};

export {conf_init, conf_confirm, conf_replace}
