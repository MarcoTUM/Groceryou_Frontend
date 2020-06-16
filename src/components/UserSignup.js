"use strict";

import React from 'react';
import SubmitionForm from "./SubmitionForm";
import {Button} from "antd";
class UserSignup extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <SubmitionForm/>
                <Button
                    type="primary"
                >
                    Register
                </Button>
            </div>
        )
    }

}

export default UserSignup;
