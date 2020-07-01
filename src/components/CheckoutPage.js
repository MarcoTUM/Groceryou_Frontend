import React from 'react';
import {Row, Col, Button, List, Card} from 'antd';
import PaypalButton from "./PaypalButton";
import ShoppingCart from './ShoppingCart';
import { connect } from 'react-redux';
import { ShoppingCartOutlined,FieldTimeOutlined, EuroOutlined} from '@ant-design/icons';

const mapStateToProps = state => ({
    cart: state.cart
})

class CheckoutPage extends React.Component {

    state = {
    };

    showPaypalButtons = () => {
        this.setState({ showPaypal: true});
    }

    paymentSucceeded = () => {

    }

    render() {
        return (
        <Row>
            <Col span={12}>
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