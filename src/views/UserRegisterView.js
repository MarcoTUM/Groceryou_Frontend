import React from 'react';

import NavBar from '../components/NavBar';
import SubNavBar from '../components/SubNavBar';
import UserSignup from "../components/UserSignup";

class UserRegisterView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Groceryou",
        };
    }

    render() {
        return (
            <main>
                <NavBar />
                <SubNavBar />
                <div class="content">
                    <UserSignup/>
                </div>
            </main>
        );
    }
}

export default UserRegisterView;
