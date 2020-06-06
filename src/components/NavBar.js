import React from 'react';

import { Link } from 'react-router-dom';

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
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
            </nav>
        );
    }
}

export default NavBar;