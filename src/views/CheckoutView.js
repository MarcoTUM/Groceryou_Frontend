import React from 'react';
import NavBar from '../components/NavBar';
import SubNavBar from '../components/SubNavBar';
import CheckoutPage from '../components/CheckoutPage';

class CheckoutView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <main>
                <CheckoutPage history= {this.props.history}/>
            </main>
        );
    }
}

export default CheckoutView;