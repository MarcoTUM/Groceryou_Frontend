import React from "react";

import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const LoginRegisterButtons = () => {
    return(
        <div className={styles.LoginRegisterButtonDiv}>
            <Link to="/login">
                <button className={styles.LoginRegisterButton}>Login</button>
            </Link>
            <Link to="/register">
                <button className={styles.LoginRegisterButton}>Register</button>
            </Link>
        </div>
    );
};

export default LoginRegisterButtons;
