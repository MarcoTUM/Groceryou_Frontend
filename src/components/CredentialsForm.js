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
            type: props.type,
            username: '',
            password: '',
            firstName: '',
            lastName:'',
            phoneNumber: '',
            street: '',
            plz: 0,
            city: '',
            houseNr: 0
        };


        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){

        let user;
        if(this.props.type === "Register"){

            //type check
            let errorMsg = '';
            if(isNaN(this.state.phoneNumber))
                errorMsg += "Phone Number, ";

            if(isNaN(this.state.plz))
                errorMsg += "PLZ, ";

            if(isNaN(this.state.houseNr))
                errorMsg += "House Number, ";

            if(errorMsg !== ''){
                errorMsg = errorMsg.slice(0, errorMsg.length - 2);
                alert("The following fields only accept digits: " + errorMsg);
                return;
            }

            user = {
                username: this.state.username,
                password: this.state.password,
                userData: {
                    name: this.state.firstName,
                    surname: this.state.lastName,
                    phoneNumber: this.state.phoneNumber,
                    address: {
                        street: this.state.street,
                        PLZ: this.state.plz,
                        city: this.state.city,
                        houseNr: this.state.houseNr
                    }
                },
            }
        }
        else{
            user = {
                username: this.state.username,
                password: this.state.password
            };
        }
        this.props.submitRequest(user);
    }

    failSubmit (errorInfo){
        console.log('Failed:', errorInfo)
    };

    render() {

        let extraFields;
        if(this.state.type === "Register"){
            extraFields = <div>
                <Form.Item
                    label = "First Name"
                    name = 'firstName'
                    rules={[
                        {
                            required: true,
                            message: 'Please enter first name'
                        },
                    ]}
                >
                    <Input
                        value={this.state.firstName}
                        onChange={e => this.setState({
                            firstName: e.target.value
                        })}
                        aria-errormessage={"First name is required"}
                    />
                </Form.Item>

                <Form.Item
                    label = "Last Name"
                    name = 'lastName'
                    rules={[
                        {
                            required: true,
                            message: 'Please enter last name'
                        },
                    ]}
                >
                    <Input
                        value={this.state.lastName}
                        onChange={e => this.setState({
                            lastName: e.target.value
                        })}
                        aria-errormessage={"Last name is required"}
                    />
                </Form.Item>

                <Form.Item
                    label = "Phone Number"
                    name = 'phoneNumber'
                    rules={[
                        {
                            required: true,
                            message: 'Please enter phone number'
                        },
                    ]}
                >
                    <Input
                        value={this.state.phoneNumber}
                        onChange={e => this.setState({
                            phoneNumber: Number(e.target.value)
                        })}
                        aria-errormessage={"Phone number is required"}
                    />
                </Form.Item>

                <Form.Item
                    label = "Street"
                    name = 'street'
                    rules={[
                        {
                            required: true,
                            message: 'Please enter street'
                        },
                    ]}
                >
                    <Input
                        value={this.state.street}
                        onChange={e => this.setState({
                            street: e.target.value
                        })}
                        aria-errormessage={"Street number is required"}
                    />
                </Form.Item>

                <Form.Item
                    label = "PLZ"
                    name = 'plz'
                    rules={[
                        {
                            required: true,
                            message: 'Please enter PLZ'
                        },
                    ]}
                >
                    <Input
                        value={this.state.plz}
                        onChange={e => this.setState({
                            plz: Number(e.target.value)
                        })}
                        aria-errormessage={"PLZ is required"}
                    />
                </Form.Item>

                <Form.Item
                    label = "City"
                    name = 'city'
                    rules={[
                        {
                            required: true,
                            message: 'Please enter city'
                        },
                    ]}
                >
                    <Input
                        value={this.state.city}
                        onChange={e => this.setState({
                            city: e.target.value
                        })}
                        aria-errormessage={"City is required"}
                    />
                </Form.Item>

                <Form.Item
                    label = "House Number"
                    name = 'houseNumber'
                    rules={[
                        {
                            required: true,
                            message: 'Please enter house number'
                        },
                    ]}
                >
                    <Input
                        value={this.state.houseNr}
                        onChange={e => this.setState({
                            houseNr: Number(e.target.value)
                        })}
                        aria-errormessage={"House number is required"}
                    />
                </Form.Item>

            </div>
        }

        else
            extraFields = <div></div>

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
                    {extraFields}
                    <Form.Item {...tailLayout}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className={styles.Button}
                        >
                            {this.props.type}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default CredentialsForm;
