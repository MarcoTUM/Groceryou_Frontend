import React from 'react';

import UserSignup from "../components/UserSignup";
import UserService from "../services/UserService";
import {login} from "../redux/authActions";
import store from "../store";

class UserRegisterView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Groceryou",
        };
    }

    register(user){
        UserService.register(user.username, user.password).then((data) => {
            store.dispatch(login(user.username,data.token));
            this.props.history.push('/');
            window.location.reload();
        }).catch((e) => {
            console.error(e);
            this.setState({
                error:e
            });
        });
    }

    render() {
        return (
            <main>
                <div class="content">
                    <UserSignup
                        onSubmit={(user) => this.register(user)}
                        error={this.state.error}
                    />
                </div>
            </main>
        );
    }
}

export default UserRegisterView;
