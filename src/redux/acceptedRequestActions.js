import {
    ACCEPTED_REQUEST_STARTED,
    ACCEPTED_REQUEST_SUCCESS,
    ACCEPTED_REQUEST_FAIL
} from "./reduxConstants"
import Axios from 'axios';

const fetchAcceptedRequests = () => async (dispatch) => {
    dispatch(fetchAcceptedRequestsStarted());
    try {
        const acceptedRequest = await Axios.get("/customerRequest");
        dispatch(fetchAcceptedRequestsSuccess(acceptedRequest.data));
    } catch (error) {
        dispatch(fetchAcceptedRequestsFailure(error.message));
    }
}

const fetchAcceptedRequestsStarted = () => ({
    type: ACCEPTED_REQUEST_STARTED,
});

const fetchAcceptedRequestsSuccess= (data) => ({
    type: ACCEPTED_REQUEST_SUCCESS,
    payload: {
        ...data
    }
});

const fetchAcceptedRequestsFailure = (errorMessage) => ({
    type: ACCEPTED_REQUEST_FAIL,
    payload: errorMessage
});

export { fetchAcceptedRequests }