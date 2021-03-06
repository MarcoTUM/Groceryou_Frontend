import React from "react";
import { Link } from "react-router-dom";
import UserService from "../services/UserService";
import store from "../store";
import {logout} from "../redux/authActions";
import styles from './NavBar.module.css';
import { Menu, Dropdown, Avatar } from 'antd';
import {clearCart} from '../redux/cartActions';

const LogoutButton = () => {

    let name = store.getState().auth.username;

    const initLogout = () => {
        UserService.logout().then(() =>{
            store.dispatch(logout()); 
        });
        store.dispatch(clearCart());  
    };
    

    const menu = (
        <Menu className={styles.userOptions}>
            <p>{name}</p>
            
            <Menu.Item>
                <Link to="/placedRequests">
                    Orders
                </Link>
            </Menu.Item >
          
            <Menu.Item onClick={initLogout}>

                    Logout

            </Menu.Item>
          
        </Menu>
      );

    return(
        

        <div className={styles.LoginRegisterButtonDiv}>
            <Dropdown  overlay={menu}>
                <Avatar className={styles.avatar} size={60} onClick={e => e.preventDefault()}>{name[0]}</Avatar>
            </Dropdown>
        </div>
    );
};

export default LogoutButton;
