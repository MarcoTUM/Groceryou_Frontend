import { SHOP_SELECTION_SUCCESS, SHOP_SELECTION_FAIL } from './reduxConstants';

const setCurrentShop = (currentShop) => async (dispatch) => {
    console.log("action shop selection success called");
    try {
        dispatch({type: SHOP_SELECTION_SUCCESS, payload: currentShop });
        
    } catch(error){
        dispatch({type: SHOP_SELECTION_FAIL, payload: error.message});
    }
}

export {setCurrentShop}