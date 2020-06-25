import {AUTH_LOGIN, AUTH_LOGOUT, AUTH_REFRESH} from "./reduxConstants";

function authReducer(state={username: '', token: ''}, action){

    const payload = action.payload;

    switch(action.type){
        case AUTH_LOGIN:
            return{
                username: payload.username,
                token: payload.token
            };
        case AUTH_LOGOUT:
            return{
                username: null,
                token: null
            };
        case AUTH_REFRESH:
            return{
                token: payload.token
            };
        default:
            return state;
    }
}

export {authReducer}
