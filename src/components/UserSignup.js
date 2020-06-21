"use strict";

import React from 'react';
import CredentialsForm from "./CredentialsForm";
import {Button} from "antd";
class UserSignup extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <CredentialsForm buttonName={"Register"}/>
            </div>
        )
    }

}

export default UserSignup;
