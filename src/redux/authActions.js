import {AUTH_LOGIN, AUTH_LOGOUT, AUTH_REFRESH} from "./reduxConstants";

const login = (username, token) => (dispatch) => {
    try{
        dispatch({
            type: AUTH_LOGIN,
            payload: {
                username: username,
                token: token
            }
        })
    } catch(error){}
};

const logout = () => (dispatch) => { //does currently set the token to empty, does NOT remove the token from local storage
    try{
        dispatch({
            type: AUTH_LOGOUT,
            payload: {}
        })
    } catch(error){}
};

const refresh = (token, username) => (dispatch) => {
    console.log("REFRESHING: " + username)
    try{
        dispatch({
            type: AUTH_REFRESH,
            payload: {
                username: username,
                token: token
            }
        })
    } catch(error){}
};

export {login,logout,refresh}
