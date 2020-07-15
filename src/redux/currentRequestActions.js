import {
    CURRENT_REQUEST_STARTED,
    CURRENT_REQUEST_SUCCESS,
    CURRENT_REQUEST_FAIL
} from "./reduxConstants"
import Axios from 'axios';

const fetchCurrentRequest = () => async (dispatch) => {
    dispatch(fetchCurrentRequestStarted());
    try {
        const currentRequest = await Axios.get("/requests");
        dispatch(fetchCurrentRequestSuccess(currentRequest.data["0"]));
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

export { fetchCurrentRequest }