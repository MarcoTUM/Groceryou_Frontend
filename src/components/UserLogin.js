"use strict";

import React from 'react';
import SubmitionForm from "./SubmitionForm";
import {Button} from "antd";
class UserLogin extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <SubmitionForm/>
                <Button
                    type = "primary">
                    Login
                </Button>
            </div>
        )
    }
}

export default UserLogin;
