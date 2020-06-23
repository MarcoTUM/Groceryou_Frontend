import {AUTH_LOGIN, AUTH_LOGOUT} from "./reduxConstants";

const login = (username, token) => (dispatch) => {
    try{
        dispatch({
            type: AUTH_LOGIN,
            payload: {
                username: username,
                token: token
            }
        })
    } catch (error) {}
};

const logout = () => (dispatch) => {
    try{
        dispatch({
            type: AUTH_LOGOUT,
            payload: {}
        })
    } catch {}
};

export {login,logout}
