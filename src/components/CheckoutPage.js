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

    }

    handleTimeChange(time, timeString){
        this.state.desiredDeliveryTimeStart.set({
            hour:time.hour(),
            minute: time.minute(),
            millisecond: time.millisecond()
        })
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
                        desiredDeliveryTimeEnd:this.state.desiredDeliveryTimeStart.add(1, 'hours').utc().format()}

        newRequest.itemList = this.props.cart.cartItems.map((item)=>{
            const reqItem = {
                name: item.product.name,
                amount: item.qty,
                unitType: item.product.unitType,
                unitPrice: item.product.price,
                img: item.product.image
            }
            return reqItem;
        })

        return newRequest;
        
    }

    render() {
        return (
            <Row className='checkoutPage'>
                    <Col  span={12} >
                        <div className='shoppingCartContainer'>
                        <ShoppingCart/>
                        <h3 className='cartText'>Commision: {commission}€</h3>
                        <h3 className='paymentText'>Minimal Price: {this.props.shop!==null?this.props.shop.minimumPrice:0}€</h3>
                        </div>
                    </Col>
                    <Col span={12} className="paymentContainer">
                    <h3 className='paymentText'>Choose your desired delivery time</h3>
                        <DatePicker allowClear={false} onChange={this.handleDateChange}  defaultValue={this.state.desiredDeliveryTimeStart} />
                        <TimePicker allowClear={false} onChange={this.handleTimeChange}defaultValue={this.state.desiredDeliveryTimeStart} />
                        {this.props.shop==null || this.props.cart.cartItems.length===0|| this.props.cart.price<this.props.shop.minimumPrice?<div className='emptyCartMessage' >Your shopping cart does not have enough items, fill it with more groceries before purchasing</div>
                        :
                        <PaypalButton price={{value: this.props.cart.price+commission, currency: 'EUR'}} onSuccess={this.paymentSuccessCallback}/>}
                    </Col>
                </Row>
        );
  
    }
}

export default connect(mapStateToProps)(CheckoutPage);