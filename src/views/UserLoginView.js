import React from 'react';

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
                <h2>User Login</h2>
            </main>
        );
    }
}

export default UserLoginView;