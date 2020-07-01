import React from 'react';
import ShoppingPage from '../components/ShoppingPage';

class HomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        return (
            <ShoppingPage history= {this.props.history}/>
        );
    }


}

export default HomeView;
