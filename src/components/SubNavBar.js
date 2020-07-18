import React from 'react';

import UserService from "../services/UserService";
import styles from './SubNavBar.module.css';
import { Link} from 'react-router-dom';

class SubNavBar extends React.Component {
    constructor(props) {
        super(props);

        // Set initial state
        this.state = {
            isAuthenticated: false,
            isCourier: false
        };
    }

    componentDidMount() {
        // Get authentication data
        this.setState({
            isAuthenticated: UserService.isAuthenticated()
        });

        // Check if logged in user is a courier
        UserService.isCourier()
        .then((response) => {
            this.setState({
                isCourier: response
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        // Check if the user is logged in and if the user is a courier
        if (this.state.isAuthenticated && this.state.isCourier) {
            return (
                <div className={styles.subnav}>
                    {this.props.children}
                    <Link to="/acceptRequest">
                        Accept Requests
                    </Link>
                </div>
            );
        } else {
            return (
                <div className={styles.subnav}>
                    {this.props.children}
                    
                    <Link className={styles.navItem} to="/shopSelection">
                        Map
                    </Link>
                    <Link className={styles.navItem} to="/shop">
                        Shop
                    </Link>
                    <Link className={styles.navItem} to="/checkout">
                        Checkout
                    </Link>
                </div>
            );
        }
        
    }
}

export default SubNavBar;