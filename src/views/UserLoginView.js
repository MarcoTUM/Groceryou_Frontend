import React from 'react';

import NavBar from '../components/NavBar';
import SubNavBar from '../components/SubNavBar';
import UserLogin from "../components/UserLogin";
import UserSignup from "../components/UserSignup";
import CredentialsForm from "../components/CredentialsForm";
import UserService from "../services/UserService";


class UserLoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Groceryou",
        };
    }

    login(user){
        UserService.login(user.username, user.password).then((data) => {
            this.props.history.push('/');
        }).catch((e) => {
            console.error(e);
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
