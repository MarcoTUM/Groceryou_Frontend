import {
    CURRENT_REQUEST_SUCCESS,
    CURRENT_REQUEST_FAIL
} from "./reduxConstants"
import Axios from 'axios';

const fetchCurrentRequest = () => async (dispatch) => {
    try {
        const currentRequest = await Axios.get("/customerRequest");
        dispatch({ type: CURRENT_REQUEST_SUCCESS, payload: currentRequest.data[0] });
    } catch (error) {
        dispatch({ type: CURRENT_REQUEST_FAIL, payload: error.message });
    }
}

export { fetchCurrentRequest }