import React from "react";

import UserService from "../services/UserService";
import store from "../store";
import {logout} from "../redux/authActions";

const LogoutButton = () => {

    let name = store.getState().auth.username;

    const initLogout = () => {
        UserService.logout().then(() =>{
            store.dispatch(logout());
        });
    };

    return(
        <div className="LoginRegisterButtonDiv">
            <button className="LogoutNameButton">{name}</button>
            {/*<button onClick={UserService.logout.then(() => {store.dispatch(logout())})} className="LoginRegisterButton">Logout</button>*/}
            <button onClick={initLogout} className="LoginRegisterButton">Logout</button>
        </div>
    );
};

export default LogoutButton;
