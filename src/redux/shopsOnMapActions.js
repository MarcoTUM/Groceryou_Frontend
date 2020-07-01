import { SHOPS_LIST_REQUEST, SHOPS_LIST_SUCCESS, SHOPS_LIST_FAIL } from './reduxConstants';
import Axios from 'axios';

const fetchShops = () => async (dispatch) => {
    try {
        dispatch({type: SHOPS_LIST_REQUEST});
        const {data} = await Axios.get("/shops");
        dispatch({type: SHOPS_LIST_SUCCESS, payload: data });
    } catch(error){
        dispatch({type: SHOPS_LIST_FAIL, payload: error.message});
    }
}

export {fetchShops}