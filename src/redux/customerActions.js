import {
    CUSTOMER_REQUEST_STARTED,
    CUSTOMER_REQUEST_SUCCESS,
    CUSTOMER_REQUEST_FAIL
} from "./reduxConstants"
import Axios from 'axios';

const fetchCustomers = () => async (dispatch) => {
    dispatch(fetchCustomersStarted());
    try {
        const customerRequest = await Axios.get("/users");
        // TODO: Filter for customers, exclude couriers
        dispatch(fetchCustomersSuccess(customerRequest.data));
    } catch (error) {
        dispatch(fetchCustomersFailure(error.message));
    }
}

const fetchCustomersStarted = () => ({
    type: CUSTOMER_REQUEST_STARTED,
});

const fetchCustomersSuccess= (data) => ({
    type: CUSTOMER_REQUEST_SUCCESS,
    payload: {
        ...data
    }
});

const fetchCustomersFailure = (errorMessage) => ({
    type: CUSTOMER_REQUEST_FAIL,
    payload: errorMessage
});

export { fetchCustomers }