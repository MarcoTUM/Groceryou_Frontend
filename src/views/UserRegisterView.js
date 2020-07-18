import React from 'react';

<<<<<<< HEAD
import UserSignup from "../components/UserSignup";
import UserService from "../services/UserService";
import {login} from "../redux/authActions";
import store from "../store";
=======
import NavBar from '../components/NavBar';
import SubNavBar from '../components/SubNavBar';
>>>>>>> Navbar now only with login and register button, fixed AcceptRequest scrollbar bug.

class UserRegisterView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Groceryou",
        };
    }
<<<<<<< HEAD
    
    register(user){
        UserService.register(user.username, user.password, user.userData).then((data) => {
            store.dispatch(login(user.username,data.token));
        }).catch((e) => {
            console.error(e);
            this.setState({
                error:e
            });
        });
    }
=======
>>>>>>> Navbar now only with login and register button, fixed AcceptRequest scrollbar bug.

    render() {
        return (
            <main>
<<<<<<< HEAD
                <div class="content">
                    <UserSignup
                        onSubmit={(user) => this.register(user)}
                        error={this.state.error}
                    />
=======
                <NavBar />
                <SubNavBar />
                <div class="content">
                    <h2>Register</h2>
>>>>>>> Navbar now only with login and register button, fixed AcceptRequest scrollbar bug.
                </div>
            </main>
        );
    }
}

<<<<<<< HEAD
export default UserRegisterView;
=======
export default UserRegisterView;
>>>>>>> Navbar now only with login and register button, fixed AcceptRequest scrollbar bug.
