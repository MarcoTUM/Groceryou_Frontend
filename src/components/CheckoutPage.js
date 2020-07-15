import React from 'react';
import {Row, Col, Button, List, Card} from 'antd';
import PaypalButton from "./PaypalButton";
import ShoppingCart from './ShoppingCart';
import './CheckoutPage.css';
import { connect } from 'react-redux';
import UserService from "../services/UserService";

const mapStateToProps = state => ({
    cart: state.cart
})

class CheckoutPage extends React.Component {

    constructor(props) {
        super(props);
        this.state={
        }

        this.checkAuthentication();
    }
    
    checkAuthentication(){
        let isLoggedIn = UserService.isAuthenticated();
        if(!isLoggedIn){
            this.props.history.push('/login');
        }
    }

    showPaypalButtons = () => {
        this.setState({ showPaypal: true});
    }

    paymentSucceeded = () => {

    }

    render() {
        return (
        <Row>
            <Col className='shoppingCartContainer' span={12}>
                <ShoppingCart/>
            </Col>
            <Col span={12}>
                {this.props.cart.cartItems.length==0?<div>Your shopping cart is empty, fill it with some groceries before purchasing</div>
                :
                <PaypalButton price={this.props.cart.price}/>}
            </Col>
        </Row>
        );
  
    }
}

export default connect(mapStateToProps)(CheckoutPage);