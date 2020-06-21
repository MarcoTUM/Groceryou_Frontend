"use strict";

import React from 'react';
import CredentialsForm from "./CredentialsForm";
import {Button} from "antd";
class UserSignup extends React.Component{

    constructor(props) {
        super(props);
        this.submitRequest = this.submitRequest.bind(this);
    }

    submitRequest(user){
        this.props.onSubmit(user);
    }

    render(){
        return(
            <div>
                <CredentialsForm
                    buttonName={"Register"}
                    submitRequest={this.submitRequest}
                />
            </div>
        )
    }
}

export default UserSignup;
