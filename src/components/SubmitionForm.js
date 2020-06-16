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
                <Form.Item
                    label = "Username"
                    name = 'username'
                    rules={[
                        {
                            required: true,
                            message: 'Please enter username'
                        },
                    ]}
                >
                    <Input
                        value={this.state.username}
                        onChange={this.handleChangeUsername}
                        aria-errormessage={"Login is required"}
                    />
                </Form.Item>
                <Form.Item
                    label= "Password"
                    name = 'password'
                    rules={[
                        {
                            required: true,
                            message: 'Please enter password'
                        },
                    ]}
                >
                    <Input.Password
                        value={this.state.password}
                        onChange={this.handleChangePassword}
                        aria-errormessage={"Password is required"}
                    />
                </Form.Item>
                {/*<Form.Item>*/}
                {/*    <Button type="primary" htmlType="submit">*/}
                {/*        Submit*/}
                {/*    </Button>*/}
                {/*</Form.Item>*/}
            </Form>
        )
    }
}

export default SubmitionForm;
