import {
    ACCEPTED_REQUEST_SUCCESS,
    ACCEPTED_REQUEST_FAIL
} from "./reduxConstants"
import Axios from 'axios';

const fetchAcceptedRequests = () => async (dispatch) => {
    try {
        const acceptedRequest = await Axios.get("/customerRequest");
        dispatch({ type: ACCEPTED_REQUEST_SUCCESS, payload: acceptedRequest.data });
    } catch (error) {
        dispatch({ type: ACCEPTED_REQUEST_FAIL, payload: error.message });
    }
}

export { fetchAcceptedRequests }