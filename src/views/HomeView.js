import React from 'react';
import NavBar from '../components/NavBar';
import SubNavBar from '../components/SubNavBar';

class HomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <main>
                <NavBar />
                <SubNavBar />
                <div class="content">
                    <h2>Home</h2>
                </div>
            </main>
        );
    }
}

export default HomeView;