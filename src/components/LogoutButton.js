import React from "react";

import UserService from "../services/UserService";
import store from "../store";

const LogoutButton = () => {

    let name = store.getState().auth.username;

    return(
        <div className="LoginRegisterButtonDiv">
            <button className="LogoutNameButton">{name}</button>
            <button onClick={UserService.logout} className="LoginRegisterButton">Logout</button>
        </div>
    );
};

export default LogoutButton;
