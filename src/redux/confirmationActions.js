import {
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

export {conf_init}
