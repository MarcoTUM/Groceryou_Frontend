"use strict";

import React from 'react';
import {Form, Input, Button, Checkbox} from 'antd';

class SubmitionForm extends React.Component{

    constructor(props) {
        super(props);

        this.state={
            username: '',
            password: '',
        };

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeUsername(value){
        this.setState(Object.assign({}, this.state, {username: value}));
    }

    handleChangePassword(value){
        this.setState(Object.assign({}, this.state, {password: value}));
    }

    handleSubmit(event){
        event.preventDefault();

        let user = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.onSubmit(user);
    }

    render() {
        return (
            <Form>
                <Form.Item>
                    <Input/>
                </Form.Item>
                <Form.Item>
                    <Input.Password/>
                </Form.Item>
            </Form>
        )
    }
}

export default SubmitionForm;
