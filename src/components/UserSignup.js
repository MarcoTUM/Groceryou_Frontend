import React from 'react';
import CredentialsForm from "./CredentialsForm";
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
                    type={"Register"}
                    submitRequest={this.submitRequest}
                />
            </div>
        )
    }
}

export default UserSignup;
