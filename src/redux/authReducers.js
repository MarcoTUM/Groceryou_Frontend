import {AUTH_LOGIN, AUTH_LOGOUT} from "./reduxConstants";

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
                username: '',
                token: ''
            };
        default:
            return state;
    }
}

export {authReducer}
