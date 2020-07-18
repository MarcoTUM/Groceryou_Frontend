import React from "react";

import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import {Button} from 'antd';

const LoginRegisterButtons = () => {
    return(
        <div className={styles.LoginRegisterButtonDiv}>
            <Link to="/login">
                {/*<button className={styles.LoginRegisterButton}>Login</button>*/}
                <Button type='text'>Login</Button>
            </Link>
            <Link to="/register">
                {/*<button className={styles.LoginRegisterButton}>Register</button>*/}
                <Button type='text'>Register</Button>
            </Link>
        </div>
    );
};

export default LoginRegisterButtons;
