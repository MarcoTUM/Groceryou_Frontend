import React from 'react';
import NavBar from '../components/NavBar';
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
            <NavBar />
            <ShoppingPage />
            </div>
        );
    }


}

export default HomeView;