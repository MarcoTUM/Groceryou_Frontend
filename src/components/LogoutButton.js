import React from "react";
import { Link } from "react-router-dom";
import UserService from "../services/UserService";
import store from "../store";
import {logout} from "../redux/authActions";
import styles from './NavBar.module.css';
import { Menu, Dropdown } from 'antd';

const LogoutButton = () => {

    let name = store.getState().auth.username;

    const initLogout = () => {
        UserService.logout().then(() =>{
            store.dispatch(logout());
        });
    };

    const handleClickOrders = () => {
        this.props.history.push('/login');
    }
    

    const menu = (
        <Menu>
            
          <Menu.Item>
            <Link to="/placedRequests">
              Orders
              </Link>
          </Menu.Item>
          
          <Menu.Item onClick={initLogout} danger>Logout</Menu.Item>
        </Menu>
      );

    return(
        

        <div className={styles.LoginRegisterButtonDiv}>
            <Dropdown overlay={menu}>
            <button className={styles.LogoutNameButton} onClick={e => e.preventDefault()}>{name}</button>
            </Dropdown>
            {/*<button onClick={UserService.logout.then(() => {store.dispatch(logout())})} className="LoginRegisterButton">Logout</button>*/}
            {/*<button onClick={initLogout} className={styles.LoginRegisterButton}>Logout</button>*/}
        </div>
    );
};

export default LogoutButton;
