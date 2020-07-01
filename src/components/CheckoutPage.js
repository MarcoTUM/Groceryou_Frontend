import React from 'react';
import PaypalButton from "./PaypalButton";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    cart: state.cart
})

class CheckoutPage extends React.Component {

    state = {
    };

    showPaypalButtons = () => {
        this.setState({ showPaypal: true});
    }
    render() {

        return (<PaypalButton price={this.props.cart.price}/>);
  
    }
}

export default connect(mapStateToProps)(CheckoutPage);