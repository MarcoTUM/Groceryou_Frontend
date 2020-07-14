import {
    CONFIRMATION_CONFIRM,
    CONFIRMATION_INIT,
    CONFIRMATION_REPLACE,
    ITEMS_REQUEST_STARTED,
    ITEMS_REQUEST_SUCCESS,
    ITEMS_REQUEST_FAIL
} from "./reduxConstants";
import Axios from 'axios';

const fetchItems = () => async (dispatch) => {
    dispatch(fetchItemsStarted());
    try {
        const itemRequest = await Axios.get("/requests");
        dispatch(fetchItemsSuccess(itemRequest.data["0"]));
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
    } catch(e) {console.log("FAILS: " + e)}
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

export {fetchItems ,conf_init, conf_confirm, conf_replace}
