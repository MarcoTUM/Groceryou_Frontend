import React from 'react';
import {Form, Input, Button} from 'antd';
import styles from './CredentialsForm.module.css'

const layout = {
    labelCol: {
        span: 10,
    },
    wrapperCol: {
        span: 4
    }
};

const tailLayout = {
    wrapperCol: {
        offset: 10,
        span: 10,
    },
};

class CredentialsForm extends React.Component{

    constructor(props) {
        super(props);

        this.state={
            username: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){

        let user = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.submitRequest(user);
    }

    failSubmit (errorInfo){
        console.log('Failed:', errorInfo)
    };

    render() {
        return (
            <div className={styles.CredentialsFormDiv}>
                <Form
                    {...layout}
                    onFinish={this.handleSubmit}
                    onFinishFailed={this.failSubmit}
                >
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
                            onChange={e => this.setState({
                                username: e.target.value
                            })}
                            aria-errormessage={"Username is required"}
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
                            onChange={e => this.setState({
                                password: e.target.value
                            })}
                            aria-errormessage={"Password is required"}
                        />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className={styles.Button}
                        >
                            {this.props.buttonName}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default CredentialsForm;
