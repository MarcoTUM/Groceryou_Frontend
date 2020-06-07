import React from 'react';
import NavBar from '../components/NavBar';
import SubNavBar from '../components/SubNavBar';

class ShopperView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Groceryou",
        };
    }

    render() {
        return (
            <main>
                <NavBar />
                <SubNavBar />
                <div class="content">
                    <h2>Bacome a shopper</h2>
                </div>
            </main>
        );
    }
}

export default ShopperView;