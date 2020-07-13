import {
    CONFIRMATION_CONFIRM,
    CONFIRMATION_INIT,
} from "./reduxConstants";

const conf_init = (items) => (dispatch) => {
    try{
        dispatch({
            type: CONFIRMATION_INIT,
            payload: items
        })
    } catch(e) {}
};

const conf_conf = (index) => (dispatch) => {
    try{
        dispatch({
            type: CONFIRMATION_CONFIRM,
            payload: index
        })
    } catch(e) {}
};

export {conf_init, conf_conf}
