import React from "react";

import { Link } from 'react-router-dom';
import UserService from "../services/UserService";
import store from "../store";

const LogoutButton = () => {

    let name = store.getState().auth.username;

    return(
        <div className="LoginRegisterButtonDiv">
            <h2>Hello, {name}</h2>
            <Link to="/">
                <button onClick={UserService.logout} className="LoginRegisterButton">Logout</button>
            </Link>
        </div>
    );
};

export default LogoutButton;
