import {CART_ADD_ITEM, CART_REMOVE_ITEM, CART_CLEAR} from './reduxConstants';

function cartReducer(state={price: 0, cartItems: []}, action){

    const payload = action.payload;
    var newItems;
    var newPrice;

    switch(action.type){
        case CART_ADD_ITEM:
            const item = state.cartItems.find(x=> x.product.id === payload.product.id);  // comparing two  objects? performance issue? Diqing 17.06.2020
            var items;
            var price;
            if(item){   // update: if already exists then replace the cartItem with payload
                items = state.cartItems.map(x=>x.product.id === item.product.id?payload:x);
            } else {    // append: if not found then append payload to cartItems
                items = [...state.cartItems, payload]; 
            }
            price = items.reduce((a,c) => a+c.product.price*c.qty, 0);
            return {price: price, cartItems: items}
            
        case CART_REMOVE_ITEM:
            newItems = state.cartItems.filter(x=>x.product.id !== payload.product.id);
            newPrice = newItems.reduce((a,c) => a+c.product.price*c.qty, 0);
            return {price: newPrice, cartItems: newItems}
        case CART_CLEAR:
            return {price:0, cartItems: []}
        default:
            return state;          
    }
}
export {cartReducer}
