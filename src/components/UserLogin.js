"use strict";

import React from 'react';
import CredentialsForm from "./CredentialsForm";
import {Button} from "antd";
class UserLogin extends React.Component{

    constructor(props){
        super(props);

        console.log("props of user login");
        console.log(this.props)

        this.submitRequest = this.submitRequest.bind(this);
    }

    submitRequest(user){
        this.props.onSubmit(user);
    }

    render(){
        return(
            <div>
                <CredentialsForm
                    buttonName={"Login"}
                    submitRequest={this.submitRequest}
                />
            </div>
        )
    }
}

export default UserLogin;
