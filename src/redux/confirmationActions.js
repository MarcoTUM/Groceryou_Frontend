import {
    CONFIRMATION_CONFIRM,
    CONFIRMATION_INIT,
    CONFIRMATION_REPLACE,
    ITEMS_REQUEST_STARTED,
    ITEMS_REQUEST_SUCCESS,
    ITEMS_REQUEST_FAIL, CONFIRMATION_MISSING
} from "./reduxConstants";
import Axios from 'axios';

const fetchItems = (id) => async (dispatch) => {
    dispatch(fetchItemsStarted());
    try {
        const itemRequest = await Axios.get("/requests/" + id);
        dispatch(fetchItemsSuccess(itemRequest.data));
    } catch (error){
        dispatch(fetchItemsFailure(error.message));
    }
};


const fetchItemsStarted = () => ({
    type: ITEMS_REQUEST_STARTED,
});

const fetchItemsSuccess = (data) => ({
    type: ITEMS_REQUEST_SUCCESS,
    payload:{
        ...data
    }
});

const fetchItemsFailure = (errorMessage) => ({
    type: ITEMS_REQUEST_FAIL,
    payload: errorMessage
});

const conf_init = (items) => (dispatch) => {
    try{
        dispatch({
            type: CONFIRMATION_INIT,
            payload: items
        })
    } catch(e) {}
};

const conf_confirm = (index) => (dispatch) => {
    try{
        dispatch({
            type: CONFIRMATION_CONFIRM,
            payload: index
        })
    } catch(e) {}
};

const conf_replace = (index, replace) => (dispatch) => {
    try{
        dispatch({
            type: CONFIRMATION_REPLACE,
            payload: {
                index: index,
                replace: replace
            }
        })
    } catch(e) {}
};

const conf_missing = (index) => (dispatch) => {
    try{
        dispatch({
            type: CONFIRMATION_MISSING,
            payload: index
        })
    } catch(e) {}
};

export {fetchItems ,conf_init, conf_confirm, conf_replace, conf_missing}
