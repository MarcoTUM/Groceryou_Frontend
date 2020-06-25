import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "./reduxConstants"

const addToCart = (product, qty) => (dispatch) => {
    try {
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                product: product,
                qty: qty
            }
        })
    } catch (error) {

    }
};

const removeFromCart = (product) => (dispatch) => {
    try {
        dispatch({
            type: CART_REMOVE_ITEM,
            payload: {
                product: product
            }
        })
    } catch {

    }
};

export { addToCart, removeFromCart}
