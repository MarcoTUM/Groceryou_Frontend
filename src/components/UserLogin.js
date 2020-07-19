import React from 'react';
import CredentialsForm from "./CredentialsForm";
class UserLogin extends React.Component{

    constructor(props){
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
                    type={"Login"}
                    submitRequest={this.submitRequest}
                />
            </div>
        )
    }
}

export default UserLogin;
