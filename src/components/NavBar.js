import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../img/GroceryouLogo.png';

import './NavBar.css';

import { Button } from "antd";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <nav>
                <Link to="/"><img src={Logo} alt="Groceryou Logo" /></Link>
                <div class="LoginRegisterButtonDiv">
                    <Link to="/login"><button class="LoginRegisterButton">Login</button></Link>
                    <Link to="/register"><button class="LoginRegisterButton">Register</button></Link>
                </div>
            </nav>
        );
    }
}

export default NavBar;