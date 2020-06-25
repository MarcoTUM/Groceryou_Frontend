import {CART_ADD_ITEM, CART_REMOVE_ITEM} from './reduxConstants';

function cartReducer(state={cartItems: []}, action){

    const payload = action.payload;

    switch(action.type){
        case CART_ADD_ITEM:
            console.log("here it beginns");
            console.log(state);
            console.log(payload);
            const item = state.cartItems.find(x=> x.product.id === payload.product.id);  // comparing two  objects? performance issue? Diqing 17.06.2020
            if(item){   // update: if already exists then replace the cartItem with payload
                return {cartItems: state.cartItems.map(x=>x.product.id === item.product.id?payload:x)};
            } else {    // append: if not found then append payload to cartItems
                return {cartItems: [...state.cartItems, payload]}
            }
        case CART_REMOVE_ITEM:
            return{ cartItems: state.cartItems.filter(x=>x.product.id !== payload.product.id)};
        default:
            return state;          
    }
}

export {cartReducer}
