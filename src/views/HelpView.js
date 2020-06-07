import React from 'react';
import NavBar from '../components/NavBar';
import SubNavBar from '../components/SubNavBar';

class HelpView extends React.Component {
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
                    <h2>Help</h2>
                </div>
            </main>
        );
    }
}

export default HelpView;