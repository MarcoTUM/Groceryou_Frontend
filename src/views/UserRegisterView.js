import React from 'react';

import NavBar from '../components/NavBar';
import SubNavBar from '../components/SubNavBar';

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
                    <h2>Register</h2>
                </div>
            </main>
        );
    }
}

export default UserRegisterView;