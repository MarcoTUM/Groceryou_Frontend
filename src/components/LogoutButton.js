import React from "react";

import { Link } from 'react-router-dom';
import UserService from "../services/UserService";

const LogoutButton = () => {
    return(
        <div className="LoginRegisterButtonDiv">
            <Link to="/">
                <button onClick={UserService.logout} className="LoginRegisterButton">Logout</button>
            </Link>
        </div>
    );
};

export default LogoutButton;
