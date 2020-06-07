import React from 'react';
import NavBar from '../components/NavBar';
import SubNavBar from '../components/SubNavBar';

import { Link } from 'react-router-dom';

class ShopView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <main>
                <NavBar />
                <SubNavBar>
                    <Link to="/shop/virtual">Virtual Shop UI</Link>
                    <Link to="/shop/traditional">Traditional UI</Link>
                </SubNavBar>
                <div class="content">
                    <h2>Shop</h2>
                </div>
            </main>
        );
    }
}

export default ShopView;