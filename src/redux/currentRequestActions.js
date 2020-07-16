import {
    CURRENT_REQUEST_STARTED,
    CURRENT_REQUEST_SUCCESS,
    CURRENT_REQUEST_FAIL,
    ACCEPT_CURRENT_REQUEST_STARTED,
    ACCEPT_CURRENT_REQUEST_SUCCESS,
    ACCEPT_CURRENT_REQUEST_FAIL
} from "./reduxConstants"

import Axios from 'axios';

const fetchCurrentRequest = (requestID) => async (dispatch) => {
    dispatch(fetchCurrentRequestStarted());
    try {
        const currentRequest = await Axios.get("/requests/" + requestID.toString());
        dispatch(fetchCurrentRequestSuccess(currentRequest.data));
    } catch (error) {
        dispatch(fetchCurrentRequestFailure(error.message));
    }
}

const fetchCurrentRequestStarted = () => ({
    type: CURRENT_REQUEST_STARTED,
});

const fetchCurrentRequestSuccess= (data) => ({
    type: CURRENT_REQUEST_SUCCESS,
    payload: {
        ...data
    }
});

const fetchCurrentRequestFailure = (errorMessage) => ({
    type: CURRENT_REQUEST_FAIL,
    payload: errorMessage
});

const acceptCurrentRequest = (RequestID, courierID) => async (dispatch) => {
    dispatch(acceptCurrentRequestStarted());
    try {
        const currentRequest = await Axios.put("/requests/" + RequestID.toString(), {
            courierID: courierID
        });
        dispatch(acceptCurrentRequestSuccess(currentRequest.data));
    } catch (error) {
        dispatch(acceptCurrentRequestFailure(error.message));
    }
}

const acceptCurrentRequestStarted = () => ({
    type: ACCEPT_CURRENT_REQUEST_STARTED,
});

const acceptCurrentRequestSuccess = (data) => ({
    type: ACCEPT_CURRENT_REQUEST_SUCCESS,
    payload: {
        ...data
    }
});

const acceptCurrentRequestFailure = (errorMessage) => ({
    type: ACCEPT_CURRENT_REQUEST_FAIL,
    payload: errorMessage
});

export { fetchCurrentRequest, acceptCurrentRequest }