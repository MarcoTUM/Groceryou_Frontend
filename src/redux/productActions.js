import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from './reduxConstants';
import Axios from 'axios';

const listProduct = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST});
        const {data} = await Axios.get("/shops");
        
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch(error){
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});
    }
}

export {listProduct}