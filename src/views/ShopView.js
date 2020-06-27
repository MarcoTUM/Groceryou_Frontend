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
            <div>
            <ShoppingPage />
            </div>
        );
    }


}

export default HomeView;
