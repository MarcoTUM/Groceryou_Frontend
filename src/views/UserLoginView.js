import React from 'react';

import NavBar from '../components/NavBar';

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
                <div class="content">
                    <h2>Login</h2>
                </div>
            </main>
        );
    }
}

export default UserLoginView;