import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../img/GroceryouLogo.png';
import './NavBar.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Groceryou",
        };
    }

    render() {
        return (
            <nav>
                <Link to="/"><img src={Logo} alt="Groceryou Logo"/></Link>
                <Link to="/">Home</Link>
                <Link to="/">Shop</Link>
                <Link to="/">Delivery</Link>
                <Link to="/">Q&amp;A</Link>
                <Link to="/">Become a shopper</Link>
                <Link to="/login">Login</Link>
            </nav>
        );
    }
}

export default NavBar;