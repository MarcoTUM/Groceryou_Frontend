import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../img/GroceryouLogo.png';
import UserService from "../services/UserService";

import './NavBar.css';
import LoginRegisterButtons from './LoginRegisterButtons'
import LogoutButton from './LogoutButton'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let isLoggedIn = UserService.isAuthenticated();
        let content;
        if(isLoggedIn)
            content = <LogoutButton/>;
        else
            content = <LoginRegisterButtons/>;

        return (
            <nav>
                <Link to="/"><img src={Logo} alt="Groceryou Logo" /></Link>
                {content}
            </nav>
        );
    }
}

export default NavBar;
