import React from 'react';
import PlacedRequestsPage from '../components/PlacedRequestsPage';

class PlacedRequestsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <main>
                <PlacedRequestsPage history= {this.props.history}/>
            </main>
        );
    }
}

export default PlacedRequestsView;