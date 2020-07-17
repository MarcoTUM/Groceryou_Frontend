import React from 'react';
import {Row, Col, TimePicker, DatePicker} from 'antd';
import PaypalButton from "./PaypalButton";
import ShoppingCart from './ShoppingCart';
import './CheckoutPage.css';
import { connect } from 'react-redux';
import UserService from "../services/UserService";
import RequestService from '../services/RequestService';
import moment from 'moment';

const mapStateToProps = state => ({
    shop: state.currentShop.data,
    cart: state.cart
})

const commission=15;

class CheckoutPage extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            desiredDeliveryTimeStart: new moment(),
            testValue: null
        }

        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.showPaypalButtons = this.showPaypalButtons.bind(this);
        this.createRequest = this.createRequest.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.paymentSuccessCallback = this.paymentSuccessCallback.bind(this);

        this.checkAuthentication();
    }

    
    checkAuthentication(){
        let isLoggedIn = UserService.isAuthenticated();
        if(!isLoggedIn){
            this.props.history.push('/login');
        }
    }

    showPaypalButtons(){
        this.setState({ showPaypal: true});
    }

    handleDateChange(date, dateString){
        this.state.desiredDeliveryTimeStart.set({
            year:date.year(),
            month: date.month(),
            date: date.date()
        })

        console.log(this.state.desiredDeliveryTimeStart.utc().format());
    }

    handleTimeChange(time, timeString){
        this.state.desiredDeliveryTimeStart.set({
            hour:time.hour(),
            minute: time.minute(),
            millisecond: time.millisecond()
        })

        console.log(this.state.desiredDeliveryTimeStart.utc());
    }

    paymentSuccessCallback(){
        const newRequest = this.createRequest();
        RequestService.createRequest(newRequest);
    }

    createRequest(){
        
        const user = UserService.getCurrentUser();

        const newRequest = {itemList:[],
                        userID:user.id,
                        commission:15,
                        desiredDeliveryTimeStart:this.state.desiredDeliveryTimeStart.utc().format(),
                        desiredDeliveryTimeEnd:"2020-07-29T13:00:00.000Z"}

        this.props.cart.cartItems.map((item)=>{
            const reqItem = {
                name: item.product.name,
                amount: item.qty,
                unitType: item.product.unitType,
                unitPrice: item.product.price,
                img: item.product.image
            }
            newRequest.itemList.push(reqItem);
        })

        return newRequest;
        
    }

    render() {
        return (
        <Row className='shoppingPage'>
            <Col className='shoppingCartContainer' span={12}>
                <ShoppingCart/>
                <h3 className='cartText'>Commision: {commission}€</h3>


            </Col>
            <Col className='paymentContainer' span={12}>
                <h3 className='paymentText'>Choose your desired delivery time</h3>
                <DatePicker onChange={this.handleDateChange}  defaultValue={this.state.desiredDeliveryTimeStart} />
                <TimePicker onChange={this.handleTimeChange}defaultValue={this.state.desiredDeliveryTimeStart} />
                {this.props.cart.cartItems.length==0|| this.props.cart.price<this.props.shop.minimumPrice?<div className='emptyCartMessage' >Your shopping cart does not have enough items, fill it with more groceries before purchasing</div>
                :
                <PaypalButton price={{value: this.props.cart.price+commission, currency: 'EUR'}} onSuccess={this.paymentSuccessCallback}/>}
            </Col>
        </Row>
        );
  
    }
}

export default connect(mapStateToProps)(CheckoutPage);