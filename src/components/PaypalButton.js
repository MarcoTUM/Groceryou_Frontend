import React from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";
import LoadingSpinner from "./LoadingSpinner";
import './PaypalButton.css';

const CLIENT = {
    sandbox: "AXqnQXo1BwXohM4TTqzetJHwsnROJE187yT5AYDPabSj24IpxjFxPpReHMxARA9FqrigIGoJ3x3DS2E3",
    production: "changdiqing@live.cn"

}

const CLIENT_ID = process.env.NODE_ENV === "production" ? CLIENT.production : CLIENT.sandbox;

let PayPalButton = null;

class PaypalButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showButtons: false,
            loading: true,
            paid:false
        };

        window.React = React;
        window.ReactDom = ReactDOM;
    }

    componentDidMount(){
        const { isScriptLoaded, isScriptLoadSucceed } = this.props;

        if (isScriptLoaded && isScriptLoadSucceed) {
            PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
            this.setState({ loading: false, showButtons:true});
        }
    }

    componentWillReceiveProps(nextProps){
        const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

        const scriptJustLoaded = !this.state.showButtons && !this.props.isScriptLoaded && isScriptLoaded;

        if (scriptJustLoaded) {
            if (isScriptLoadSucceed) {
                PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM});
                this.setState({ loading: false, showButtons: true});
            }
        }
    }

    createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: "Groceryou Order",
                    amount: {
                        //currency_code: 'USD',
                        //value: 200
                        
                        currency_code: this.props.price.currency,
                        value: this.props.price.value ,
                        
                    }
                }
            ]
        });
    };
    
    onApprove = (data, actions) => {
        actions.order.capture().then(details => {
            const paymentData = {
                payerID: data.payerID,
                orderID: data.orderID
            };
            this.setState({ showButtons: false, paid: true });
        });

        this.props.onSuccess();
    };

    render(){
        const { showButtons, loading, paid } = this.state;

        return (
            <div className="main">
                { loading && <LoadingSpinner/>}

                {showButtons && (
                    <PayPalButton
                        createOrder={(data, actions)=> this.createOrder(data, actions)}
                        onApprove={(data, actions)=> this.onApprove(data, actions)}
                    />  
                )}

                {paid && (
                    <div className="main">
                        <h3> Payment Successful!</h3>
                    </div>
                )}
            </div>
        );
    }


}

export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}&currency=EUR`)(PaypalButton);
