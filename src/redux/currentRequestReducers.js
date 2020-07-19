import {
  CURRENT_REQUEST_STARTED,
  CURRENT_REQUEST_SUCCESS,
  CURRENT_REQUEST_FAIL,
  ACCEPT_CURRENT_REQUEST_STARTED,
  ACCEPT_CURRENT_REQUEST_SUCCESS,
  ACCEPT_CURRENT_REQUEST_FAIL,
} from "./reduxConstants";

const initialState = {
  loading: false,
  currentRequestData: {
    itemList: [],
    _id: "",
    userID: "",
    commission: 0,
    desiredDeliveryTimeStart: new Date(),
    desiredDeliveryTimeEnd: new Date(),
    __v: 0
  },
  error: null,
};

function currentRequestReducer(state = initialState, action) {
  const payload = action.payload;

  switch (action.type) {
    case CURRENT_REQUEST_STARTED:
      return {
        ...state,
        loading: true
      };
    case CURRENT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        currentRequestData: { ...payload },
      };
    case CURRENT_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.errorMessage,
      };
    case ACCEPT_CURRENT_REQUEST_STARTED:
      return {
        ...state,
        loading: true
      };
    case ACCEPT_CURRENT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        currentRequestData: { ...payload },
      };
    case ACCEPT_CURRENT_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.errorMessage,
      };
    default:
      return state;
  }
}

export { currentRequestReducer };
