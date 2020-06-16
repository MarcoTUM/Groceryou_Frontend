import React from 'react';

import NavBar from '../components/NavBar';
import SubNavBar from '../components/SubNavBar';
import UserLogin from "../components/UserLogin";
import UserSignup from "../components/UserSignup";
import SubmitionForm from "../components/SubmitionForm";


class UserLoginView extends React.Component {
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
                    <SubmitionForm/>
                    <UserLogin/>
                    <UserSignup/>
                </div>
            </main>
        );
    }
}

export default UserLoginView;
