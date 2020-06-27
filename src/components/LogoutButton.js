import React from "react";

import { Link } from 'react-router-dom';
import { useHistory } from "react-router";
import UserService from "../services/UserService";
import store from "../store";

const LogoutButton = () => {

    let name = store.getState().auth.username;
    const history = useHistory();

    const logout = () => {
        UserService.logout();
        history.push('/');
        window.location.reload();
    };

    return(
        <div className="LoginRegisterButtonDiv">
            <button className="LogoutNameButton">{name}</button>
            <button onClick={logout} className="LoginRegisterButton">Logout</button>
        </div>
    );
};

export default LogoutButton;
