import React from 'react';

import NavBar from '../components/NavBar';
import SubNavBar from '../components/SubNavBar';
import UserLogin from "../components/UserLogin";
import UserService from "../services/UserService";
import {login} from "../redux/authActions";
import store from "../store";

class UserLoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Groceryou",
        };
    }

    login(user){
        UserService.login(user.username, user.password).then((data) => {
            store.dispatch(login(user.username,data.token));
            this.props.history.push('/');
        }).catch((e) => {
            alert("Incorrect username or password");
            this.setState({
                error: e
            });
        });
    }

    render() {
        return (
            <main>
                <NavBar />
                <SubNavBar />
                <div class="content">
                    <UserLogin
                        onSubmit={(user) => this.login(user)}
                        error={this.state.error}
                    />
                </div>
            </main>
        );
    }
}

export default UserLoginView;
