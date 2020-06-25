import React from "react";

import { Link } from 'react-router-dom';

const LoginRegisterButtons = () => {
    return(
        <div className="LoginRegisterButtonDiv">
            <Link to="/login">
                <button className="LoginRegisterButton">Login</button>
            </Link>
            <Link to="/register">
                <button className="LoginRegisterButton">Register</button>
            </Link>
        </div>
    );
};

export default LoginRegisterButtons;
