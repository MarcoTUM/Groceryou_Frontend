import React from 'react';

import NavBar from '../components/NavBar';
import SubNavBar from '../components/SubNavBar';
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
                <NavBar />
                <SubNavBar />
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
