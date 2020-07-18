import {
    PLACED_REQUESTS_STARTED,
    PLACED_REQUESTS_SUCCESS,
    PLACED_REQUESTS_FAIL
} from "./reduxConstants"
import Axios from 'axios';

const fetchPlacedRequests = (userID) => async (dispatch) => {
    try {
        dispatch({type: PLACED_REQUESTS_STARTED});
        console.log(userID);
        const {data} = await Axios.get("/requests/userId/" + userID);
        //const {data} = await Axios.get("/requests/userId/123908945023194");
        dispatch({type: PLACED_REQUESTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({type: PLACED_REQUESTS_FAIL, payload: error.message});
    }
}


export { fetchPlacedRequests }