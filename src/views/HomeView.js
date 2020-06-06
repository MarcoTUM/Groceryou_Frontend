import React from 'react';
import NavBar from '../components/NavBar';

class HomeView extends React.Component {
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
                <h2>Home</h2>
            </main>
        );
    }
}

export default HomeView;